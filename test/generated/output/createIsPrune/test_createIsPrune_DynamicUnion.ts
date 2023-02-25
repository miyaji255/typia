import typia from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_isPrune } from "../internal/_test_isPrune";
export const test_createIsPrune_DynamicUnion = _test_isPrune("DynamicUnion", DynamicUnion.generate, (input: any): input is DynamicUnion => { const is = (input: any): input is DynamicUnion => {
    const $join = (typia.createIsPrune as any).join;
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
}; const prune = (input: DynamicUnion): void => {
    const $join = (typia.createIsPrune as any).join;
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if (RegExp(/^-?\d+\.?\d*$/).test(key) || RegExp(/^(prefix_(.*))/).test(key) || RegExp(/((.*)_postfix)$/).test(key) || RegExp(/^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/).test(key))
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; if (!is(input))
    return false; prune(input); return true; }, DynamicUnion.SPOILERS);
