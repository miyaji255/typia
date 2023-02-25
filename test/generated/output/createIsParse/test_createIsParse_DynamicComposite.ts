import typia from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_isParse } from "../internal/_test_isParse";
export const test_createIsParse_DynamicComposite = _test_isParse("DynamicComposite", DynamicComposite.generate, (input: any): typia.Primitive<DynamicComposite> => { const is = (input: any): input is DynamicComposite => {
    const $join = (typia.createIsParse as any).join;
    const $io0 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/^-?\d+\.?\d*$/).test(key))
            return "number" === typeof value;
        if (RegExp(/^(prefix_(.*))/).test(key))
            return "string" === typeof value;
        if (RegExp(/((.*)_postfix)$/).test(key))
            return "string" === typeof value;
        if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
            return "string" === typeof value || "number" === typeof value || "boolean" === typeof value;
        if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key))
            return "boolean" === typeof value;
        return true;
    });
    return "object" === typeof input && null !== input && $io0(input);
}; input = JSON.parse(input); return is(input) ? input as any : null; }, DynamicComposite.SPOILERS);
