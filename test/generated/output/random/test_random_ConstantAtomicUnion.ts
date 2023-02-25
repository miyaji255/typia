import typia from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_random } from "../internal/_test_random";
export const test_random_ConstantAtomicUnion = _test_random("ConstantAtomicUnion", () => ((generator: typia.IRandomGenerator = (typia.random as any).generator) => {
    const $generator = (typia.random as any).generator;
    const $pick = (typia.random as any).pick;
    const $ro0 = (recursive = false, depth = 0) => ({
        key: "key"
    });
    return (generator.array ?? $generator.array)(() => $pick([
        () => false,
        () => 1,
        () => 2,
        () => "three",
        () => "four",
        () => $ro0()
    ])());
})(), (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ConstantAtomicUnion => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => "key" === input.key || $guard(_exceptionable, {
            path: _path + ".key",
            expected: "\"key\"",
            value: input.key
        });
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(\"four\" | \"three\" | 1 | 2 | Resolve<__type> | false)>",
            value: input
        })) && input.every((elem: any, _index1: number) => false === elem || 1 === elem || 2 === elem || "three" === elem || "four" === elem || ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(\"four\" | \"three\" | 1 | 2 | Resolve<__type> | false)",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as typia.Primitive<ConstantAtomicUnion>;
});
