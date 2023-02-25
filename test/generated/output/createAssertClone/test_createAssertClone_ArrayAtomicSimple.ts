import typia from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_createAssertClone_ArrayAtomicSimple = _test_assertClone("ArrayAtomicSimple", ArrayAtomicSimple.generate, (input: any): typia.Primitive<ArrayAtomicSimple> => { const assert = (input: any) => {
    const $guard = (typia.createAssertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ArrayAtomicSimple => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "[Array<boolean>, Array<number>, Array<string>]",
            value: input
        })) && ((input.length === 3 || $guard(true, {
            path: _path + "",
            expected: "[Array<boolean>, Array<number>, Array<string>]",
            value: input
        })) && ((Array.isArray(input[0]) || $guard(true, {
            path: _path + "[0]",
            expected: "Array<boolean>",
            value: input[0]
        })) && input[0].every((elem: any, _index1: number) => "boolean" === typeof elem || $guard(true, {
            path: _path + "[0][" + _index1 + "]",
            expected: "boolean",
            value: elem
        }))) && ((Array.isArray(input[1]) || $guard(true, {
            path: _path + "[1]",
            expected: "Array<number>",
            value: input[1]
        })) && input[1].every((elem: any, _index2: number) => "number" === typeof elem || $guard(true, {
            path: _path + "[1][" + _index2 + "]",
            expected: "number",
            value: elem
        }))) && ((Array.isArray(input[2]) || $guard(true, {
            path: _path + "[2]",
            expected: "Array<string>",
            value: input[2]
        })) && input[2].every((elem: any, _index3: number) => "string" === typeof elem || $guard(true, {
            path: _path + "[2][" + _index3 + "]",
            expected: "string",
            value: elem
        }))));
    })(input, "$input", true);
    return input as ArrayAtomicSimple;
}; const clone = (input: ArrayAtomicSimple): typia.Primitive<ArrayAtomicSimple> => {
    return Array.isArray(input) && (input.length === 3 && (Array.isArray(input[0]) && input[0].every((elem: any) => "boolean" === typeof elem)) && (Array.isArray(input[1]) && input[1].every((elem: any) => "number" === typeof elem)) && (Array.isArray(input[2]) && input[2].every((elem: any) => "string" === typeof elem))) ? [
        Array.isArray(input[0]) ? input[0].map((elem: any) => elem) : input[0],
        Array.isArray(input[1]) ? input[1].map((elem: any) => elem) : input[1],
        Array.isArray(input[2]) ? input[2].map((elem: any) => elem) : input[2]
    ] : input;
}; assert(input); const output = clone(input); /* ArrayAtomicSimple */; return output as ArrayAtomicSimple; }, ArrayAtomicSimple.SPOILERS);
