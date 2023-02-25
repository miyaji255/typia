import typia from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_assertStringify_DynamicTree = _test_assertStringify("DynamicTree", DynamicTree.generate, (input) => ((input: DynamicTree): string => { const assert = (input: any) => {
    const $guard = (typia.assertStringify as any).guard;
    const $join = (typia.assertStringify as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicTree => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("number" === typeof input.sequence && !Number.isNaN(input.sequence) || $guard(_exceptionable, {
            path: _path + ".sequence",
            expected: "number",
            value: input.sequence
        })) && (("object" === typeof input.children && null !== input.children && false === Array.isArray(input.children) || $guard(_exceptionable, {
            path: _path + ".children",
            expected: "Resolve<Record<string, DynamicTree>>",
            value: input.children
        })) && $ao1(input.children, _path + ".children", true && _exceptionable));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => false === _exceptionable || Object.keys(input).every(key => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/(.*)/).test(key))
                return ("object" === typeof value && null !== value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "Resolve<DynamicTree>",
                    value: value
                })) && $ao0(value, _path + $join(key), true && _exceptionable);
            return true;
        });
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<DynamicTree>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as DynamicTree;
}; const stringify = (input: DynamicTree): string => {
    const $string = (typia.assertStringify as any).string;
    const $join = (typia.assertStringify as any).join;
    const $io0 = (input: any) => "string" === typeof input.id && "number" === typeof input.sequence && ("object" === typeof input.children && null !== input.children && false === Array.isArray(input.children) && $io1(input.children));
    const $io1 = (input: any) => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/(.*)/).test(key))
            return "object" === typeof value && null !== value && $io0(value);
        return true;
    });
    const $so0 = (input: any) => `{"id":${$string(input.id)},"sequence":${input.sequence},"children":${$so1(input.children)}}`;
    const $so1 = (input: any) => `{${Object.entries(input).map(([key, value]) => { if (undefined === value)
        return ""; return `${JSON.stringify(key)}:${$so0(value)}`; }).filter(str => "" !== str).join(",")}}`;
    return $so0(input);
}; return stringify(assert(input)); })(input), DynamicTree.SPOILERS);
