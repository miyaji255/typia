import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { IsProgrammer } from "../IsProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";
import { NotationGeneralProgrammer } from "./NotationGeneralProgrammer";

export namespace NotationIsGeneralProgrammer {
  export interface IProps extends IProgrammerProps {
    rename: (str: string) => string;
  }

  export const decompose = (props: {
    rename: (str: string) => string;
    context: ITypiaContext;
    importer: FunctionImporter;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const is: FeatureProgrammer.IDecomposed = IsProgrammer.decompose({
      ...props,
      config: {
        equals: false,
      },
    });
    const notation: FeatureProgrammer.IDecomposed =
      NotationGeneralProgrammer.decompose({
        ...props,
        validated: true,
      });
    return {
      functions: {
        ...is.functions,
        ...notation.functions,
      },
      statements: [
        ...is.statements,
        ...notation.statements,
        StatementFactory.constant("__is", is.arrow),
        StatementFactory.constant("__notation", notation.arrow),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [IdentifierFactory.parameter("input", TypeFactory.keyword("any"))],
        ts.factory.createUnionTypeNode([
          notation.arrow.type ?? TypeFactory.keyword("any"),
          ts.factory.createTypeReferenceNode("null"),
        ]),
        undefined,
        ts.factory.createBlock(
          [
            ts.factory.createIfStatement(
              ts.factory.createPrefixUnaryExpression(
                ts.SyntaxKind.ExclamationToken,
                ts.factory.createCallExpression(
                  ts.factory.createIdentifier("__is"),
                  undefined,
                  [ts.factory.createIdentifier("input")],
                ),
              ),
              ts.factory.createReturnStatement(ts.factory.createNull()),
            ),
            ts.factory.createReturnStatement(
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("__notation"),
                undefined,
                [ts.factory.createIdentifier("input")],
              ),
            ),
          ],
          true,
        ),
      ),
    };
  };

  export const write = (props: IProps): ts.CallExpression => {
    const importer: FunctionImporter = new FunctionImporter(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      ...props,
      importer,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      importer,
      result,
    });
  };
}
