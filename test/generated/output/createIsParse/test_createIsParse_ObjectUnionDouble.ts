import typia from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_isParse } from "../internal/_test_isParse";
export const test_createIsParse_ObjectUnionDouble = _test_isParse("ObjectUnionDouble", ObjectUnionDouble.generate, (input: any): typia.Primitive<ObjectUnionDouble> => { const is = (input: any): input is ObjectUnionDouble => {
    const $io0 = (input: any) => "object" === typeof input.value && null !== input.value && "number" === typeof input.value.x && ("object" === typeof input.child && null !== input.child && $iu0(input.child));
    const $io2 = (input: any) => "object" === typeof input.value && null !== input.value && "boolean" === typeof input.value.y;
    const $io4 = (input: any) => "object" === typeof input.value && null !== input.value && "number" === typeof input.value.y;
    const $io6 = (input: any) => "object" === typeof input.value && null !== input.value && "string" === typeof input.value.x && ("object" === typeof input.child && null !== input.child && $iu1(input.child));
    const $io8 = (input: any) => "object" === typeof input.value && null !== input.value && "string" === typeof input.value.y;
    const $io10 = (input: any) => "object" === typeof input.value && null !== input.value && $io11(input.value);
    const $io11 = (input: any) => Array.isArray(input.y) && input.y.every((elem: any) => "number" === typeof elem);
    const $iu0 = (input: any) => (() => {
        if ($io2(input))
            return $io2(input);
        if ($io4(input))
            return $io4(input);
        return false;
    })();
    const $iu1 = (input: any) => (() => {
        if ($io8(input))
            return $io8(input);
        if ($io10(input))
            return $io10(input);
        return false;
    })();
    const $iu2 = (input: any) => (() => {
        if ($io0(input))
            return $io0(input);
        if ($io6(input))
            return $io6(input);
        return false;
    })();
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $iu2(elem));
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ObjectUnionDouble.SPOILERS);
