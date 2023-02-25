import typia from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_TagAtomicUnion = _test_isClone("TagAtomicUnion", TagAtomicUnion.generate, (input) => ((input: any): typia.Primitive<TagAtomicUnion> | null => { const is = (input: any): input is TagAtomicUnion => {
    const $io0 = (input: any) => "string" === typeof input.value && 3 <= input.value.length && 7 >= input.value.length || "number" === typeof input.value && 3 <= input.value;
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; const clone = (input: TagAtomicUnion): typia.Primitive<TagAtomicUnion> => {
    const $co0 = (input: any) => ({
        value: input.value
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), TagAtomicUnion.SPOILERS);
