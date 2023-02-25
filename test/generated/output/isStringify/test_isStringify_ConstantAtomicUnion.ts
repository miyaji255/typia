import typia from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_ConstantAtomicUnion = _test_isStringify("ConstantAtomicUnion", ConstantAtomicUnion.generate, (input) => ((input: ConstantAtomicUnion): string | null => { const is = (input: any): input is ConstantAtomicUnion => {
    const $io0 = (input: any) => "key" === input.key;
    return Array.isArray(input) && input.every((elem: any) => false === elem || 1 === elem || 2 === elem || "three" === elem || "four" === elem || "object" === typeof elem && null !== elem && $io0(elem));
}; const stringify = (input: ConstantAtomicUnion): string => {
    const $string = (typia.isStringify as any).string;
    const $throws = (typia.isStringify as any).throws;
    const $so0 = (input: any) => `{"key":${(() => {
        if ("string" === typeof input.key)
            return $string(input.key);
        if ("string" === typeof input.key)
            return "\"" + input.key + "\"";
        $throws({
            expected: "\"key\"",
            value: input.key
        });
    })()}}`;
    return `[${input.map((elem: any) => (() => {
        if ("string" === typeof elem)
            return $string(elem);
        if ("boolean" === typeof elem)
            return elem;
        if ("number" === typeof elem)
            return elem;
        if ("string" === typeof elem)
            return "\"" + elem + "\"";
        if ("object" === typeof elem && null !== elem)
            return $so0(elem);
        $throws({
            expected: "(\"four\" | \"three\" | 1 | 2 | Resolve<__type> | false)",
            value: elem
        });
    })()).join(",")}]`;
}; return is(input) ? stringify(input) : null; })(input), ConstantAtomicUnion.SPOILERS);
