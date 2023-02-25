import typia from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_createAssertClone_TupleRestArray = _test_assertClone("TupleRestArray", TupleRestArray.generate, (input: any): typia.Primitive<TupleRestArray> => { const assert = (input: any) => {
    const $guard = (typia.createAssertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is TupleRestArray => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "[boolean, number, ...Array<string>]",
            value: input
        })) && (("boolean" === typeof input[0] || $guard(true, {
            path: _path + "[0]",
            expected: "boolean",
            value: input[0]
        })) && ("number" === typeof input[1] || $guard(true, {
            path: _path + "[1]",
            expected: "number",
            value: input[1]
        })) && ((Array.isArray(input.slice(2)) || $guard(true, {
            path: _path + "",
            expected: "Array<Array<string>>",
            value: input.slice(2)
        })) && input.slice(2).every((elem: any, _index1: number) => (Array.isArray(elem) || $guard(true, {
            path: _path + "[" + (2 + _index1) + "]",
            expected: "Array<string>",
            value: elem
        })) && elem.every((elem: any, _index2: number) => "string" === typeof elem || $guard(true, {
            path: _path + "[" + (2 + _index1) + "][" + _index2 + "]",
            expected: "string",
            value: elem
        })))));
    })(input, "$input", true);
    return input as TupleRestArray;
}; const clone = (input: TupleRestArray): typia.Primitive<TupleRestArray> => {
    return Array.isArray(input) && ("boolean" === typeof input[0] && "number" === typeof input[1] && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => "string" === typeof elem)))) ? [
        input[0],
        input[1],
        ...Array.isArray(input.slice(2)) ? input.slice(2).map((elem: any) => Array.isArray(elem) ? elem.map((elem: any) => elem) : elem) : input.slice(2)
    ] : input;
}; assert(input); const output = clone(input); /* TupleRestArray */; return output as TupleRestArray; }, TupleRestArray.SPOILERS);
