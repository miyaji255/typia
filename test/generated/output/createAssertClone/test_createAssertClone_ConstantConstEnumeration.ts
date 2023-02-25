import typia from "../../../src";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_createAssertClone_ConstantConstEnumeration = _test_assertClone("ConstantConstEnumeration", ConstantConstEnumeration.generate, (input: any): typia.Primitive<ConstantConstEnumeration> => { const assert = (input: any) => {
    const $guard = (typia.createAssertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ConstantConstEnumeration => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(\"Four\" | \"Three\" | 0 | 1 | 2)>",
            value: input
        })) && input.every((elem: any, _index1: number) => 0 === elem || 1 === elem || 2 === elem || "Three" === elem || "Four" === elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(\"Four\" | \"Three\" | 0 | 1 | 2)",
            value: elem
        }));
    })(input, "$input", true);
    return input as ConstantConstEnumeration;
}; const clone = (input: ConstantConstEnumeration): typia.Primitive<ConstantConstEnumeration> => {
    return Array.isArray(input) ? input.map((elem: any) => elem) : input;
}; assert(input); const output = clone(input); /* Array */; return output as ConstantConstEnumeration; }, ConstantConstEnumeration.SPOILERS);
