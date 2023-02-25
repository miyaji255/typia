import typia from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_validateStringify_DynamicComposite = _test_validateStringify("DynamicComposite", DynamicComposite.generate, (input) => ((input: DynamicComposite): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<DynamicComposite> => {
    const errors = [] as any[];
    const $report = (typia.validateStringify as any).report(errors);
    const $join = (typia.validateStringify as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicComposite => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), false === _exceptionable || Object.keys(input).map(key => {
                const value = input[key];
                if (undefined === value)
                    return true;
                if (RegExp(/^-?\d+\.?\d*$/).test(key))
                    return "number" === typeof value && !Number.isNaN(value) || $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "number",
                        value: value
                    });
                if (RegExp(/^(prefix_(.*))/).test(key))
                    return "string" === typeof value || $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "string",
                        value: value
                    });
                if (RegExp(/((.*)_postfix)$/).test(key))
                    return "string" === typeof value || $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "string",
                        value: value
                    });
                if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
                    return "string" === typeof value || "number" === typeof value && !Number.isNaN(value) || "boolean" === typeof value || $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "(boolean | number | string)",
                        value: value
                    });
                if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key))
                    return "boolean" === typeof value || $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "boolean",
                        value: value
                    });
                return true;
            }).every((flag: boolean) => flag)].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<DynamicComposite>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<DynamicComposite>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<DynamicComposite>;
}; const stringify = (input: DynamicComposite): string => {
    const $string = (typia.validateStringify as any).string;
    const $join = (typia.validateStringify as any).join;
    const $throws = (typia.validateStringify as any).throws;
    const $tail = (typia.validateStringify as any).tail;
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
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; })(input), DynamicComposite.SPOILERS);
