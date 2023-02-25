import typia from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_assertPrune } from "../internal/_test_assertPrune";
export const test_assertPrune_DynamicUnion = _test_assertPrune("DynamicUnion", DynamicUnion.generate, (input) => ((input: any): DynamicUnion => { const assert = (input: any) => {
    const $guard = (typia.assertPrune as any).guard;
    const $join = (typia.assertPrune as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicUnion => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => false === _exceptionable || Object.keys(input).every(key => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/^-?\d+\.?\d*$/).test(key))
                return "string" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "string",
                    value: value
                });
            if (RegExp(/^(prefix_(.*))/).test(key))
                return "string" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "string",
                    value: value
                });
            if (RegExp(/((.*)_postfix)$/).test(key))
                return "string" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "string",
                    value: value
                });
            if (RegExp(/^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/).test(key))
                return "number" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "number",
                    value: value
                });
            return true;
        });
        return ("object" === typeof input && null !== input && false === Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Resolve<DynamicUnion>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as DynamicUnion;
}; const prune = (input: DynamicUnion): void => {
    const $join = (typia.assertPrune as any).join;
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if (RegExp(/^-?\d+\.?\d*$/).test(key) || RegExp(/^(prefix_(.*))/).test(key) || RegExp(/((.*)_postfix)$/).test(key) || RegExp(/^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/).test(key))
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; assert(input); prune(input); return input; })(input), DynamicUnion.SPOILERS);
