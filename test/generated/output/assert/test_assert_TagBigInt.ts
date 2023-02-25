import typia from "../../../src";
import { TagBigInt } from "../../structures/TagBigInt";
import { _test_assert } from "../internal/_test_assert";
export const test_assert_TagBigInt = _test_assert("TagBigInt", TagBigInt.generate, (input) => ((input: any) => {
    const $guard = (typia.assert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is TagBigInt => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("bigint" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "bigint",
            value: input.value
        })) && ("bigint" === typeof input.ranged && 0n <= input.ranged && 100n >= input.ranged || $guard(_exceptionable, {
            path: _path + ".ranged",
            expected: "bigint",
            value: input.ranged
        })) && ("bigint" === typeof input.minimum && 0n <= input.minimum || $guard(_exceptionable, {
            path: _path + ".minimum",
            expected: "bigint",
            value: input.minimum
        })) && ("bigint" === typeof input.maximum && 100n >= input.maximum || $guard(_exceptionable, {
            path: _path + ".maximum",
            expected: "bigint",
            value: input.maximum
        })) && ("bigint" === typeof input.multipleOf && 0n === input.multipleOf % 3n || $guard(_exceptionable, {
            path: _path + ".multipleOf",
            expected: "bigint",
            value: input.multipleOf
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<TagBigInt>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as TagBigInt;
})(input), TagBigInt.SPOILERS);
