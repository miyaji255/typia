import typia from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_isClone } from "../internal/_test_isClone";
export const test_createIsClone_TemplateAtomic = _test_isClone("TemplateAtomic", TemplateAtomic.generate, (input: any): typia.Primitive<TemplateAtomic> | null => { const is = (input: any): input is TemplateAtomic => {
    const $io0 = (input: any) => "string" === typeof input.prefix && true === RegExp(/^prefix_(.*)/).test(input.prefix) && ("string" === typeof input.postfix && true === RegExp(/(.*)_postfix$/).test(input.postfix)) && ("string" === typeof input.middle_string && true === RegExp(/^the_(.*)_value$/).test(input.middle_string)) && ("string" === typeof input.middle_string_empty && true === RegExp(/^the_(.*)_value$/).test(input.middle_string_empty)) && ("string" === typeof input.middle_numeric && true === RegExp(/^the_-?\d+\.?\d*_value$/).test(input.middle_numeric)) && ("the_false_value" === input.middle_boolean || "the_true_value" === input.middle_boolean) && ("string" === typeof input.ipv4 && true === RegExp(/^-?\d+\.?\d*\.-?\d+\.?\d*\.-?\d+\.?\d*\.-?\d+\.?\d*$/).test(input.ipv4)) && ("string" === typeof input.email && true === RegExp(/(.*)@(.*)\.(.*)/).test(input.email));
    return "object" === typeof input && null !== input && $io0(input);
}; const clone = (input: TemplateAtomic): typia.Primitive<TemplateAtomic> => {
    const $co0 = (input: any) => ({
        prefix: input.prefix,
        postfix: input.postfix,
        middle_string: input.middle_string,
        middle_string_empty: input.middle_string_empty,
        middle_numeric: input.middle_numeric,
        middle_boolean: input.middle_boolean,
        ipv4: input.ipv4,
        email: input.email
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; }, TemplateAtomic.SPOILERS);
