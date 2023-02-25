import typia from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_random } from "../internal/_test_random";
export const test_random_AtomicSimple = _test_random("AtomicSimple", () => ((generator: typia.IRandomGenerator = (typia.random as any).generator) => {
    const $generator = (typia.random as any).generator;
    return [
        (generator.boolean ?? $generator.boolean)(),
        (generator.number ?? $generator.number)(0, 100),
        (generator.string ?? $generator.string)()
    ];
})(), (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is (string | number | boolean)[] => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(boolean | number | string)>",
            value: input
        })) && input.every((elem: any, _index1: number) => "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(boolean | number | string)",
            value: elem
        }));
    })(input, "$input", true);
    return input as typia.Primitive<AtomicSimple>;
});
