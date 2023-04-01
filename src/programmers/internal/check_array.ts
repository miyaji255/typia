import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

import { IJsDocTagInfo } from "../../metadata/IJsDocTagInfo";
import { IMetadataTag } from "../../metadata/IMetadataTag";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { ICheckEntry } from "../helpers/ICheckEntry";
import { check_array_length } from "./check_array_length";
import { check_custom } from "./check_custom";

/**
 * @internal
 */
export const check_array =
    (importer: FunctionImporter) =>
    (metaTags: IMetadataTag[]) =>
    (jsDocTags: IJsDocTagInfo[]) =>
    (input: ts.Expression): ICheckEntry => ({
        expression: ExpressionFactory.isArray(input),
        tags: [
            ...check_array_length(metaTags)(input),
            ...check_custom("array", "Array")(importer)(jsDocTags)(input),
        ],
    });
