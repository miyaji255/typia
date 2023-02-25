import typia from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_isClone } from "../internal/_test_isClone";
export const test_createIsClone_ConstantEnumeration = _test_isClone("ConstantEnumeration", ConstantEnumeration.generate, (input: any): typia.Primitive<ConstantEnumeration> | null => { const is = (input: any): input is ConstantEnumeration => {
    return Array.isArray(input) && input.every((elem: any) => 0 === elem || 1 === elem || 2 === elem || "Three" === elem || "Four" === elem);
}; const clone = (input: ConstantEnumeration): typia.Primitive<ConstantEnumeration> => {
    return Array.isArray(input) ? input.map((elem: any) => elem) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; }, ConstantEnumeration.SPOILERS);
