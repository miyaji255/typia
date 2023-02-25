import typia from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_DynamicNever = _test_isClone("DynamicNever", DynamicNever.generate, (input) => ((input: any): typia.Primitive<DynamicNever> | null => { const is = (input: any): input is DynamicNever => {
    const $join = (typia.isClone as any).join;
    const $io0 = (input: any) => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/(.*)/).test(key))
            return null !== value && undefined === value;
        return true;
    });
    return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
}; const clone = (input: DynamicNever): typia.Primitive<DynamicNever> => {
    const $join = (typia.isClone as any).join;
    const $co0 = (input: any) => { const output = {}; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/(.*)/).test(key)) {
            output[key] = value;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), DynamicNever.SPOILERS);
