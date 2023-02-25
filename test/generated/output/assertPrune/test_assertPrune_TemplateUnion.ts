import typia from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_assertPrune } from "../internal/_test_assertPrune";
export const test_assertPrune_TemplateUnion = _test_assertPrune("TemplateUnion", TemplateUnion.generate, (input) => ((input: any): TemplateUnion => { const assert = (input: any) => {
    const $guard = (typia.assertPrune as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is TemplateUnion => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.prefix && (true === RegExp(/^prefix_(.*)/).test(input.prefix) || true === RegExp(/^prefix_-?\d+\.?\d*$/).test(input.prefix)) || $guard(_exceptionable, {
            path: _path + ".prefix",
            expected: "(`prefix_${number}` | `prefix_${string}`)",
            value: input.prefix
        })) && ("string" === typeof input.postfix && (true === RegExp(/(.*)_postfix$/).test(input.postfix) || true === RegExp(/^-?\d+\.?\d*_postfix$/).test(input.postfix)) || $guard(_exceptionable, {
            path: _path + ".postfix",
            expected: "(`${number}_postfix` | `${string}_postfix`)",
            value: input.postfix
        })) && ("the_false_value" === input.middle || "the_true_value" === input.middle || "string" === typeof input.middle && true === RegExp(/^the_-?\d+\.?\d*_value$/).test(input.middle) || $guard(_exceptionable, {
            path: _path + ".middle",
            expected: "(\"the_false_value\" | \"the_true_value\" | `the_${number}_value`)",
            value: input.middle
        })) && ((null !== input.mixed || $guard(_exceptionable, {
            path: _path + ".mixed",
            expected: "(\"the_A_value\" | \"the_B_value\" | Resolve<__type> | `the_${number}_value` | boolean | number)",
            value: input.mixed
        })) && (undefined !== input.mixed || $guard(_exceptionable, {
            path: _path + ".mixed",
            expected: "(\"the_A_value\" | \"the_B_value\" | Resolve<__type> | `the_${number}_value` | boolean | number)",
            value: input.mixed
        })) && ("the_A_value" === input.mixed || "the_B_value" === input.mixed || "number" === typeof input.mixed || "boolean" === typeof input.mixed || "string" === typeof input.mixed && true === RegExp(/^the_-?\d+\.?\d*_value$/).test(input.mixed) || ("object" === typeof input.mixed && null !== input.mixed || $guard(_exceptionable, {
            path: _path + ".mixed",
            expected: "(\"the_A_value\" | \"the_B_value\" | Resolve<__type> | `the_${number}_value` | boolean | number)",
            value: input.mixed
        })) && $ao1(input.mixed, _path + ".mixed", true && _exceptionable)));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => "string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        });
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<Resolve<TemplateUnion.Type>>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<TemplateUnion.Type>",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as TemplateUnion;
}; const prune = (input: TemplateUnion): void => {
    const $io1 = (input: any) => "string" === typeof input.name;
    const $po0 = (input: any) => {
        if ("object" === typeof input.mixed && null !== input.mixed)
            $po1(input.mixed);
        for (const key of Object.keys(input)) {
            if ("prefix" === key || "postfix" === key || "middle" === key || "mixed" === key)
                continue;
            delete input[key];
        }
    };
    const $po1 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("name" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input))
        input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem)
                $po0(elem);
        });
}; assert(input); prune(input); return input; })(input), TemplateUnion.SPOILERS);
