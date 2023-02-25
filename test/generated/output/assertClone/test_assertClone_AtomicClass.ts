import typia from "../../../src";
import { AtomicClass } from "../../structures/AtomicClass";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_assertClone_AtomicClass = _test_assertClone("AtomicClass", AtomicClass.generate, (input) => ((input: any): typia.Primitive<AtomicClass> => { const assert = (input: any) => {
    const $guard = (typia.assertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is AtomicClass => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "[Boolean, (Boolean | false), (Boolean | boolean), Number, (1 | Number), (Number | number), String, (\"characters\" | String), (String | string)]",
            value: input
        })) && ((input.length === 9 || $guard(true, {
            path: _path + "",
            expected: "[Boolean, (Boolean | false), (Boolean | boolean), Number, (1 | Number), (Number | number), String, (\"characters\" | String), (String | string)]",
            value: input
        })) && ("boolean" === typeof input[0] || input[0] instanceof Boolean || $guard(true, {
            path: _path + "[0]",
            expected: "Boolean",
            value: input[0]
        })) && ("boolean" === typeof input[1] || input[1] instanceof Boolean || $guard(true, {
            path: _path + "[1]",
            expected: "(Boolean | false)",
            value: input[1]
        })) && ((null !== input[2] || $guard(true, {
            path: _path + "[2]",
            expected: "(Boolean | boolean)",
            value: input[2]
        })) && (undefined !== input[2] || $guard(true, {
            path: _path + "[2]",
            expected: "(Boolean | boolean)",
            value: input[2]
        })) && ("boolean" === typeof input[2] || input[2] instanceof Boolean || $guard(true, {
            path: _path + "[2]",
            expected: "(Boolean | boolean)",
            value: input[2]
        }))) && ("number" === typeof input[3] || input[3] instanceof Number || $guard(true, {
            path: _path + "[3]",
            expected: "Number",
            value: input[3]
        })) && ("number" === typeof input[4] || input[4] instanceof Number || $guard(true, {
            path: _path + "[4]",
            expected: "(1 | Number)",
            value: input[4]
        })) && ((null !== input[5] || $guard(true, {
            path: _path + "[5]",
            expected: "(Number | number)",
            value: input[5]
        })) && (undefined !== input[5] || $guard(true, {
            path: _path + "[5]",
            expected: "(Number | number)",
            value: input[5]
        })) && ("number" === typeof input[5] || input[5] instanceof Number || $guard(true, {
            path: _path + "[5]",
            expected: "(Number | number)",
            value: input[5]
        }))) && ("string" === typeof input[6] || input[6] instanceof String || $guard(true, {
            path: _path + "[6]",
            expected: "String",
            value: input[6]
        })) && ("string" === typeof input[7] || input[7] instanceof String || $guard(true, {
            path: _path + "[7]",
            expected: "(\"characters\" | String)",
            value: input[7]
        })) && ((null !== input[8] || $guard(true, {
            path: _path + "[8]",
            expected: "(String | string)",
            value: input[8]
        })) && (undefined !== input[8] || $guard(true, {
            path: _path + "[8]",
            expected: "(String | string)",
            value: input[8]
        })) && ("string" === typeof input[8] || input[8] instanceof String || $guard(true, {
            path: _path + "[8]",
            expected: "(String | string)",
            value: input[8]
        }))));
    })(input, "$input", true);
    return input as AtomicClass;
}; const clone = (input: AtomicClass): typia.Primitive<AtomicClass> => {
    return Array.isArray(input) && (input.length === 9 && ("boolean" === typeof input[0] || input[0] instanceof Boolean) && ("boolean" === typeof input[1] || input[1] instanceof Boolean) && (null !== input[2] && undefined !== input[2] && ("boolean" === typeof input[2] || input[2] instanceof Boolean)) && ("number" === typeof input[3] || input[3] instanceof Number) && ("number" === typeof input[4] || input[4] instanceof Number) && (null !== input[5] && undefined !== input[5] && ("number" === typeof input[5] || input[5] instanceof Number)) && ("string" === typeof input[6] || input[6] instanceof String) && ("string" === typeof input[7] || input[7] instanceof String) && (null !== input[8] && undefined !== input[8] && ("string" === typeof input[8] || input[8] instanceof String))) ? [
        input[0] instanceof Boolean ? {} : input[0],
        input[1] instanceof Boolean ? {} : input[1],
        input[2] instanceof Boolean ? {} : input[2],
        input[3] instanceof Number ? {} : input[3],
        input[4] instanceof Number ? {} : input[4],
        input[5] instanceof Number ? {} : input[5],
        input[6] instanceof String ? {} : input[6],
        input[7] instanceof String ? {} : input[7],
        input[8] instanceof String ? {} : input[8]
    ] : input;
}; assert(input); const output = clone(input); /* AtomicClass */; return output as AtomicClass; })(input), AtomicClass.SPOILERS);
