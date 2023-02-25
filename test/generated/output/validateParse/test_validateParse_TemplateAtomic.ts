import typia from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_validateParse } from "../internal/_test_validateParse";
export const test_validateParse_TemplateAtomic = _test_validateParse("TemplateAtomic", TemplateAtomic.generate, (input) => ((input: string): typia.IValidation<typia.Primitive<TemplateAtomic>> => { const validate = (input: any): typia.IValidation<TemplateAtomic> => {
    const errors = [] as any[];
    const $report = (typia.validateParse as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is TemplateAtomic => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.prefix && true === RegExp(/^prefix_(.*)/).test(input.prefix) || $report(_exceptionable, {
                path: _path + ".prefix",
                expected: "`prefix_${string}`",
                value: input.prefix
            }), "string" === typeof input.postfix && true === RegExp(/(.*)_postfix$/).test(input.postfix) || $report(_exceptionable, {
                path: _path + ".postfix",
                expected: "`${string}_postfix`",
                value: input.postfix
            }), "string" === typeof input.middle_string && true === RegExp(/^the_(.*)_value$/).test(input.middle_string) || $report(_exceptionable, {
                path: _path + ".middle_string",
                expected: "`the_${string}_value`",
                value: input.middle_string
            }), "string" === typeof input.middle_string_empty && true === RegExp(/^the_(.*)_value$/).test(input.middle_string_empty) || $report(_exceptionable, {
                path: _path + ".middle_string_empty",
                expected: "`the_${string}_value`",
                value: input.middle_string_empty
            }), "string" === typeof input.middle_numeric && true === RegExp(/^the_-?\d+\.?\d*_value$/).test(input.middle_numeric) || $report(_exceptionable, {
                path: _path + ".middle_numeric",
                expected: "`the_${number}_value`",
                value: input.middle_numeric
            }), "the_false_value" === input.middle_boolean || "the_true_value" === input.middle_boolean || $report(_exceptionable, {
                path: _path + ".middle_boolean",
                expected: "(\"the_false_value\" | \"the_true_value\")",
                value: input.middle_boolean
            }), "string" === typeof input.ipv4 && true === RegExp(/^-?\d+\.?\d*\.-?\d+\.?\d*\.-?\d+\.?\d*\.-?\d+\.?\d*$/).test(input.ipv4) || $report(_exceptionable, {
                path: _path + ".ipv4",
                expected: "`${number}.${number}.${number}.${number}`",
                value: input.ipv4
            }), "string" === typeof input.email && true === RegExp(/(.*)@(.*)\.(.*)/).test(input.email) || $report(_exceptionable, {
                path: _path + ".email",
                expected: "`${string}@${string}.${string}`",
                value: input.email
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<TemplateAtomic>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<TemplateAtomic>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<TemplateAtomic>;
}; input = JSON.parse(input); const output = validate(input); return output; })(input), TemplateAtomic.SPOILERS);
