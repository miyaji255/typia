import typia from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_createAssertEquals_ConstantAtomicSimple = _test_assertEquals("ConstantAtomicSimple", ConstantAtomicSimple.generate, (input: any) => {
    const $guard = (typia.createAssertEquals as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ConstantAtomicSimple => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "[false, true, 2, \"three\"]",
            value: input
        })) && ((input.length === 4 || $guard(true, {
            path: _path + "",
            expected: "[false, true, 2, \"three\"]",
            value: input
        })) && (false === input[0] || $guard(true, {
            path: _path + "[0]",
            expected: "false",
            value: input[0]
        })) && (true === input[1] || $guard(true, {
            path: _path + "[1]",
            expected: "true",
            value: input[1]
        })) && (2 === input[2] || $guard(true, {
            path: _path + "[2]",
            expected: "2",
            value: input[2]
        })) && ("three" === input[3] || $guard(true, {
            path: _path + "[3]",
            expected: "\"three\"",
            value: input[3]
        })));
    })(input, "$input", true);
    return input as ConstantAtomicSimple;
});
