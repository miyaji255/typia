import typia from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_isParse } from "../internal/_test_isParse";
export const test_createIsParse_ConstantAtomicWrapper = _test_isParse("ConstantAtomicWrapper", ConstantAtomicWrapper.generate, (input: any): typia.Primitive<ConstantAtomicWrapper> => { const is = (input: any): input is ConstantAtomicWrapper => {
    const $io0 = (input: any) => "boolean" === typeof input.value;
    const $io1 = (input: any) => "number" === typeof input.value;
    const $io2 = (input: any) => "string" === typeof input.value;
    return Array.isArray(input) && (input.length === 3 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io1(input[1])) && ("object" === typeof input[2] && null !== input[2] && $io2(input[2])));
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ConstantAtomicWrapper.SPOILERS);
