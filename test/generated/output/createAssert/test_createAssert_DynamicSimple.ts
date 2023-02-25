import typia from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_assert } from "../internal/_test_assert";
export const test_createAssert_DynamicSimple = _test_assert("DynamicSimple", DynamicSimple.generate, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    const $join = (typia.createAssert as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicSimple => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => false === _exceptionable || Object.keys(input).every(key => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/(.*)/).test(key))
                return "number" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "number",
                    value: value
                });
            return true;
        });
        return ("object" === typeof input && null !== input && false === Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Resolve<DynamicSimple>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as DynamicSimple;
}, DynamicSimple.SPOILERS);
