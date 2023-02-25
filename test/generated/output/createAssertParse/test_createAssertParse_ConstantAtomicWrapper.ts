import typia from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_assertParse } from "../internal/_test_assertParse";
export const test_createAssertParse_ConstantAtomicWrapper = _test_assertParse("ConstantAtomicWrapper", ConstantAtomicWrapper.generate, (input: string): typia.Primitive<ConstantAtomicWrapper> => { const assert = (input: any) => {
    const $guard = (typia.createAssertParse as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ConstantAtomicWrapper => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => "boolean" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "boolean",
            value: input.value
        });
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => "number" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "number",
            value: input.value
        });
        const $ao2 = (input: any, _path: string, _exceptionable: boolean) => "string" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "string",
            value: input.value
        });
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "[Resolve<ConstantAtomicWrapper.IPointer<boolean>>, Resolve<ConstantAtomicWrapper.IPointer<number>>, Resolve<ConstantAtomicWrapper.IPointer<string>>]",
            value: input
        })) && ((input.length === 3 || $guard(true, {
            path: _path + "",
            expected: "[Resolve<ConstantAtomicWrapper.IPointer<boolean>>, Resolve<ConstantAtomicWrapper.IPointer<number>>, Resolve<ConstantAtomicWrapper.IPointer<string>>]",
            value: input
        })) && (("object" === typeof input[0] && null !== input[0] || $guard(true, {
            path: _path + "[0]",
            expected: "Resolve<ConstantAtomicWrapper.IPointer<boolean>>",
            value: input[0]
        })) && $ao0(input[0], _path + "[0]", true)) && (("object" === typeof input[1] && null !== input[1] || $guard(true, {
            path: _path + "[1]",
            expected: "Resolve<ConstantAtomicWrapper.IPointer<number>>",
            value: input[1]
        })) && $ao1(input[1], _path + "[1]", true)) && (("object" === typeof input[2] && null !== input[2] || $guard(true, {
            path: _path + "[2]",
            expected: "Resolve<ConstantAtomicWrapper.IPointer<string>>",
            value: input[2]
        })) && $ao2(input[2], _path + "[2]", true)));
    })(input, "$input", true);
    return input as ConstantAtomicWrapper;
}; input = JSON.parse(input); return assert(input); }, ConstantAtomicWrapper.SPOILERS);
