import typia from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_assertEquals_FunctionalProperty = _test_assertEquals("FunctionalProperty", FunctionalProperty.generate, (input) => ((input: any) => {
    const $guard = (typia.assertEquals as any).guard;
    const $join = (typia.assertEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is FunctionalProperty => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && (true || $guard(_exceptionable, {
            path: _path + ".closure",
            expected: "unknown",
            value: input.closure
        })) && (2 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["name", "closure"].some(prop => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value
            });
        })));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<FunctionalProperty>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as FunctionalProperty;
})(input));
