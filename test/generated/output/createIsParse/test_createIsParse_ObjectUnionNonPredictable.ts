import typia from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_isParse } from "../internal/_test_isParse";
export const test_createIsParse_ObjectUnionNonPredictable = _test_isParse("ObjectUnionNonPredictable", ObjectUnionNonPredictable.generate, (input: any): typia.Primitive<ObjectUnionNonPredictable> => { const is = (input: any): input is ObjectUnionNonPredictable => {
    const $io0 = (input: any) => "object" === typeof input.value && null !== input.value && $io1(input.value);
    const $io1 = (input: any) => "object" === typeof input.value && null !== input.value && $iu0(input.value);
    const $io2 = (input: any) => "object" === typeof input.value && null !== input.value && "boolean" === typeof input.value.value;
    const $io4 = (input: any) => "object" === typeof input.value && null !== input.value && "number" === typeof input.value.value;
    const $io6 = (input: any) => "object" === typeof input.value && null !== input.value && "string" === typeof input.value.value;
    const $iu0 = (input: any) => (() => {
        if ($io2(input))
            return $io2(input);
        if ($io4(input))
            return $io4(input);
        if ($io6(input))
            return $io6(input);
        return false;
    })();
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ObjectUnionNonPredictable.SPOILERS);
