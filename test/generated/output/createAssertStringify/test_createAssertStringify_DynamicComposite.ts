import typia from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_createAssertStringify_DynamicComposite = _test_assertStringify("DynamicComposite", DynamicComposite.generate, (input: DynamicComposite): string => { const assert = (input: any) => {
    const $guard = (typia.createAssertStringify as any).guard;
    const $join = (typia.createAssertStringify as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicComposite => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && (false === _exceptionable || Object.keys(input).every(key => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/^-?\d+\.?\d*$/).test(key))
                return "number" === typeof value && !Number.isNaN(value) || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "number",
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
            if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
                return "string" === typeof value || "number" === typeof value && !Number.isNaN(value) || "boolean" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "(boolean | number | string)",
                    value: value
                });
            if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key))
                return "boolean" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "boolean",
                    value: value
                });
            return true;
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<DynamicComposite>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as DynamicComposite;
}; const stringify = (input: DynamicComposite): string => {
    const $string = (typia.createAssertStringify as any).string;
    const $join = (typia.createAssertStringify as any).join;
    const $throws = (typia.createAssertStringify as any).throws;
    const $tail = (typia.createAssertStringify as any).tail;
    const $so0 = (input: any) => `{${$tail(`"id":${$string(input.id)},"name":${$string(input.name)},${Object.entries(input).map(([key, value]) => { if (undefined === value)
        return ""; if (["id", "name"].some(regular => regular === key))
        return ""; if (RegExp(/^-?\d+\.?\d*$/).test(key))
        return `${JSON.stringify(key)}:${value}`; if (RegExp(/^(prefix_(.*))/).test(key))
        return `${JSON.stringify(key)}:${$string(value)}`; if (RegExp(/((.*)_postfix)$/).test(key))
        return `${JSON.stringify(key)}:${$string(value)}`; if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
        return `${JSON.stringify(key)}:${(() => {
            if ("string" === typeof value)
                return $string(value);
            if ("number" === typeof value)
                return value;
            if ("boolean" === typeof value)
                return value;
            $throws({
                expected: "(boolean | number | string)",
                value: value
            });
        })()}`; if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key))
        return `${JSON.stringify(key)}:${value}`; }).filter(str => "" !== str).join(",")}`)}}`;
    return $so0(input);
}; return stringify(assert(input)); }, DynamicComposite.SPOILERS);
