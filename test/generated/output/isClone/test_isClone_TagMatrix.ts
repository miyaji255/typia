import typia from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_TagMatrix = _test_isClone("TagMatrix", TagMatrix.generate, (input) => ((input: any): typia.Primitive<TagMatrix> | null => { const is = (input: any): input is TagMatrix => {
    const $is_uuid = (typia.isClone as any).is_uuid;
    const $io0 = (input: any) => Array.isArray(input.matrix) && 3 === input.matrix.length && input.matrix.every((elem: any) => Array.isArray(elem) && 3 === elem.length && elem.every((elem: any) => "string" === typeof elem && true === $is_uuid(elem)));
    return "object" === typeof input && null !== input && $io0(input);
}; const clone = (input: TagMatrix): typia.Primitive<TagMatrix> => {
    const $is_uuid = (typia.isClone as any).is_uuid;
    const $co0 = (input: any) => ({
        matrix: Array.isArray(input.matrix) ? input.matrix.map((elem: any) => Array.isArray(elem) ? elem.map((elem: any) => elem) : elem) : input.matrix
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), TagMatrix.SPOILERS);
