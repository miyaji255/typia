import typia from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_assertParse } from "../internal/_test_assertParse";
export const test_assertParse_AtomicSimple = _test_assertParse("AtomicSimple", AtomicSimple.generate, (input) => ((input: string): typia.Primitive<AtomicSimple> => { const assert = (input: any) => {
    const $guard = (typia.assertParse as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is AtomicSimple => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "[boolean, number, string]",
            value: input
        })) && ((input.length === 3 || $guard(true, {
            path: _path + "",
            expected: "[boolean, number, string]",
            value: input
        })) && ("boolean" === typeof input[0] || $guard(true, {
            path: _path + "[0]",
            expected: "boolean",
            value: input[0]
        })) && ("number" === typeof input[1] || $guard(true, {
            path: _path + "[1]",
            expected: "number",
            value: input[1]
        })) && ("string" === typeof input[2] || $guard(true, {
            path: _path + "[2]",
            expected: "string",
            value: input[2]
        })));
    })(input, "$input", true);
    return input as AtomicSimple;
}; input = JSON.parse(input); return assert(input); })(input), AtomicSimple.SPOILERS);
