import typia from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_assertEquals_TemplateAtomic = _test_assertEquals("TemplateAtomic", TemplateAtomic.generate, (input) => ((input: any) => {
    const $guard = (typia.assertEquals as any).guard;
    const $join = (typia.assertEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is TemplateAtomic => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.prefix && true === RegExp(/^prefix_(.*)/).test(input.prefix) || $guard(_exceptionable, {
            path: _path + ".prefix",
            expected: "`prefix_${string}`",
            value: input.prefix
        })) && ("string" === typeof input.postfix && true === RegExp(/(.*)_postfix$/).test(input.postfix) || $guard(_exceptionable, {
            path: _path + ".postfix",
            expected: "`${string}_postfix`",
            value: input.postfix
        })) && ("string" === typeof input.middle_string && true === RegExp(/^the_(.*)_value$/).test(input.middle_string) || $guard(_exceptionable, {
            path: _path + ".middle_string",
            expected: "`the_${string}_value`",
            value: input.middle_string
        })) && ("string" === typeof input.middle_string_empty && true === RegExp(/^the_(.*)_value$/).test(input.middle_string_empty) || $guard(_exceptionable, {
            path: _path + ".middle_string_empty",
            expected: "`the_${string}_value`",
            value: input.middle_string_empty
        })) && ("string" === typeof input.middle_numeric && true === RegExp(/^the_-?\d+\.?\d*_value$/).test(input.middle_numeric) || $guard(_exceptionable, {
            path: _path + ".middle_numeric",
            expected: "`the_${number}_value`",
            value: input.middle_numeric
        })) && ("the_false_value" === input.middle_boolean || "the_true_value" === input.middle_boolean || $guard(_exceptionable, {
            path: _path + ".middle_boolean",
            expected: "(\"the_false_value\" | \"the_true_value\")",
            value: input.middle_boolean
        })) && ("string" === typeof input.ipv4 && true === RegExp(/^-?\d+\.?\d*\.-?\d+\.?\d*\.-?\d+\.?\d*\.-?\d+\.?\d*$/).test(input.ipv4) || $guard(_exceptionable, {
            path: _path + ".ipv4",
            expected: "`${number}.${number}.${number}.${number}`",
            value: input.ipv4
        })) && ("string" === typeof input.email && true === RegExp(/(.*)@(.*)\.(.*)/).test(input.email) || $guard(_exceptionable, {
            path: _path + ".email",
            expected: "`${string}@${string}.${string}`",
            value: input.email
        })) && (8 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["prefix", "postfix", "middle_string", "middle_string_empty", "middle_numeric", "middle_boolean", "ipv4", "email"].some(prop => key === prop))
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
            expected: "Resolve<TemplateAtomic>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as TemplateAtomic;
})(input));
