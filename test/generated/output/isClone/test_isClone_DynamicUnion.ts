import typia from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_DynamicUnion = _test_isClone("DynamicUnion", DynamicUnion.generate, (input) => ((input: any): typia.Primitive<DynamicUnion> | null => { const is = (input: any): input is DynamicUnion => {
    const $join = (typia.isClone as any).join;
    const $io0 = (input: any) => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/^-?\d+\.?\d*$/).test(key))
            return "string" === typeof value;
        if (RegExp(/^(prefix_(.*))/).test(key))
            return "string" === typeof value;
        if (RegExp(/((.*)_postfix)$/).test(key))
            return "string" === typeof value;
        if (RegExp(/^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/).test(key))
            return "number" === typeof value;
        return true;
    });
    return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
}; const clone = (input: DynamicUnion): typia.Primitive<DynamicUnion> => {
    const $join = (typia.isClone as any).join;
    const $co0 = (input: any) => { const output = {}; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/^-?\d+\.?\d*$/).test(key)) {
            output[key] = value;
            continue;
        }
        if (RegExp(/^(prefix_(.*))/).test(key)) {
            output[key] = value;
            continue;
        }
        if (RegExp(/((.*)_postfix)$/).test(key)) {
            output[key] = value;
            continue;
        }
        if (RegExp(/^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/).test(key)) {
            output[key] = value;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), DynamicUnion.SPOILERS);
