import ts from "typescript";

import { MapUtil } from "../utils/MapUtil";

export class ImportProgrammer {
  private readonly assets_: Map<string, IAsset> = new Map();

  /* -----------------------------------------------------------
    ENROLLMENTS
  ----------------------------------------------------------- */
  public default(props: ImportProgrammer.IDefault): ts.Identifier {
    const asset: IAsset = this.take(props.file);
    asset.default ??= props;
    asset.default.type ||= props.type;
    return ts.factory.createIdentifier(asset.default.name);
  }

  public instance(props: ImportProgrammer.IInstance): ts.Identifier {
    const alias: string = props.alias ?? props.name;
    const asset: IAsset = this.take(props.file);
    const instance: ImportProgrammer.IInstance = MapUtil.take(
      asset.instances,
      alias,
      () => props,
    );
    instance.type ||= props.type;
    return ts.factory.createIdentifier(alias);
  }

  public namespace(props: ImportProgrammer.INamespace): ts.Identifier {
    const asset: IAsset = this.take(props.file);
    asset.namespace ??= props;
    asset.namespace.type ||= props.type;
    return ts.factory.createIdentifier(asset.namespace.name);
  }

  public type(props: {
    file: string;
    name: string | ts.EntityName;
    arguments?: ts.TypeNode[];
  }): ts.ImportTypeNode {
    return ts.factory.createImportTypeNode(
      ts.factory.createLiteralTypeNode(
        ts.factory.createStringLiteral(props.file),
      ),
      undefined,
      typeof props.name === "string"
        ? ts.factory.createIdentifier(props.name)
        : props.name,
      props.arguments,
    );
  }

  /**
   * @internal
   */
  public internal(name: string): ts.PropertyAccessExpression {
    if (name.startsWith("$") === false) name = `$${name}`;
    this.namespace({
      file: `typia/lib/internal/${name}.js`,
      name: alias(name),
      type: false,
    });
    return ts.factory.createPropertyAccessExpression(
      this.namespace({
        file: `typia/lib/internal/${name}.js`,
        name: alias(name),
        type: false,
      }),
      name,
    );
  }

  /**
   * @internal
   */
  public getInternalText(name: string): string {
    if (name.startsWith("$") === false) name = `$${name}`;
    const asset: IAsset | undefined = this.take(
      `typia/lib/internal/${name}.js`,
    );
    if (!asset?.namespace) throw new Error(`Internal asset not found: ${name}`);
    return `${asset.namespace.name}.${name}`;
  }

  /**
   * @internal
   */
  private take(file: string): IAsset {
    return MapUtil.take(this.assets_, file, () => ({
      file,
      default: null,
      namespace: null,
      instances: new Map(),
    }));
  }

  /* -----------------------------------------------------------
    PROGRAM STATEMENTS
  ----------------------------------------------------------- */
  public toStatements(): ts.ImportDeclaration[] {
    const statements: ts.ImportDeclaration[] = [];
    for (const asset of this.assets_.values()) {
      if (asset.namespace !== null)
        statements.push(
          ts.factory.createImportDeclaration(
            undefined,
            ts.factory.createImportClause(
              false,
              undefined,
              ts.factory.createNamespaceImport(
                ts.factory.createIdentifier(asset.namespace.name),
              ),
            ),
            ts.factory.createStringLiteral(asset.file),
          ),
        );
      if (asset.default !== null)
        statements.push(
          ts.factory.createImportDeclaration(
            undefined,
            ts.factory.createImportClause(
              asset.default.type,
              ts.factory.createIdentifier(asset.default.name),
              undefined,
            ),
            ts.factory.createStringLiteral(asset.file),
          ),
        );
      if (asset.instances.size > 0)
        statements.push(
          ts.factory.createImportDeclaration(
            undefined,
            ts.factory.createImportClause(
              false,
              undefined,
              asset.instances.size > 0
                ? ts.factory.createNamedImports(
                    [...asset.instances.values()].map((ins) =>
                      ts.factory.createImportSpecifier(
                        ins.type,
                        undefined,
                        ts.factory.createIdentifier(ins.alias ?? ins.name),
                      ),
                    ),
                  )
                : undefined,
            ),
            ts.factory.createStringLiteral(asset.file),
            undefined,
          ),
        );
    }
    return statements;
  }
}

export namespace ImportProgrammer {
  export interface IDefault {
    file: string;
    name: string;
    type: boolean;
  }
  export interface IInstance {
    file: string;
    name: string;
    alias: string | null;
    type: boolean;
  }
  export interface INamespace {
    file: string;
    name: string;
    type: boolean;
  }
}

interface IAsset {
  file: string;
  default: ImportProgrammer.IDefault | null;
  namespace: ImportProgrammer.INamespace | null;
  instances: Map<string, ImportProgrammer.IInstance>;
}

const alias = (str: string) => `__${str}`;
