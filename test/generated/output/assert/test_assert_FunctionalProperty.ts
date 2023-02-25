import typia from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_assert } from "../internal/_test_assert";
export const test_assert_FunctionalProperty = _test_assert("FunctionalProperty", FunctionalProperty.generate, (input) => ((input: any) => {
    const $guard = (typia.assert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is FunctionalProperty => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && (true || $guard(_exceptionable, {
            path: _path + ".closure",
            expected: "unknown",
            value: input.closure
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<FunctionalProperty>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as FunctionalProperty;
})(input), FunctionalProperty.SPOILERS);
