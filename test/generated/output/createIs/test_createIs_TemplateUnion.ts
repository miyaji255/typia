import typia from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_is } from "../internal/_test_is";
export const test_createIs_TemplateUnion = _test_is("TemplateUnion", TemplateUnion.generate, (input: any): input is TemplateUnion => {
    const $io0 = (input: any) => "string" === typeof input.prefix && (true === RegExp(/^prefix_(.*)/).test(input.prefix) || true === RegExp(/^prefix_-?\d+\.?\d*$/).test(input.prefix)) && ("string" === typeof input.postfix && (true === RegExp(/(.*)_postfix$/).test(input.postfix) || true === RegExp(/^-?\d+\.?\d*_postfix$/).test(input.postfix))) && ("the_false_value" === input.middle || "the_true_value" === input.middle || "string" === typeof input.middle && true === RegExp(/^the_-?\d+\.?\d*_value$/).test(input.middle)) && (null !== input.mixed && undefined !== input.mixed && ("the_A_value" === input.mixed || "the_B_value" === input.mixed || "number" === typeof input.mixed || "boolean" === typeof input.mixed || "string" === typeof input.mixed && true === RegExp(/^the_-?\d+\.?\d*_value$/).test(input.mixed) || "object" === typeof input.mixed && null !== input.mixed && $io1(input.mixed)));
    const $io1 = (input: any) => "string" === typeof input.name;
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}, TemplateUnion.SPOILERS);
