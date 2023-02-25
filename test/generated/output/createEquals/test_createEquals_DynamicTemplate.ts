import typia from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_equals } from "../internal/_test_equals";
export const test_createEquals_DynamicTemplate = _test_equals("DynamicTemplate", DynamicTemplate.generate, (input: any, _exceptionable: boolean): input is DynamicTemplate => {
    const $join = (typia.createEquals as any).join;
    const $io0 = (input: any, _exceptionable: boolean) => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/^(prefix_(.*))/).test(key))
            return "string" === typeof value;
        if (RegExp(/((.*)_postfix)$/).test(key))
            return "string" === typeof value;
        if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
            return "number" === typeof value;
        if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key))
            return "boolean" === typeof value;
        return false;
    });
    return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input, true);
});
