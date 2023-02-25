import typia from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_assertEquals_FunctionalValueUnion = _test_assertEquals("FunctionalValueUnion", FunctionalValueUnion.generate, (input) => ((input: any) => {
    const $guard = (typia.assertEquals as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is FunctionalValueUnion => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(number | string)>",
            value: input
        })) && input.every((elem: any, _index1: number) => (null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(number | string)",
            value: elem
        })) && (undefined !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(number | string)",
            value: elem
        })) && ("function" === typeof elem || "string" === typeof elem || "number" === typeof elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(number | string)",
            value: elem
        })));
    })(input, "$input", true);
    return input as FunctionalValueUnion;
})(input));
