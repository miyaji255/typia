import typia from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_random } from "../internal/_test_random";
export const test_createRandom_ObjectOptional = _test_random("ObjectOptional", (generator: typia.IRandomGenerator = (typia.createRandom as any).generator) => {
    const $generator = (typia.createRandom as any).generator;
    const $pick = (typia.createRandom as any).pick;
    const $ro0 = (recursive = false, depth = 0) => ({
        id: $pick([
            () => undefined,
            () => (generator.string ?? $generator.string)()
        ])(),
        name: $pick([
            () => undefined,
            () => (generator.string ?? $generator.string)()
        ])(),
        email: $pick([
            () => undefined,
            () => (generator.string ?? $generator.string)()
        ])(),
        sequence: $pick([
            () => undefined,
            () => (generator.number ?? $generator.number)(0, 100)
        ])()
    });
    return $ro0();
}, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectOptional => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => (undefined === input.id || "string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "(string | undefined)",
            value: input.id
        })) && (undefined === input.name || "string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "(string | undefined)",
            value: input.name
        })) && (undefined === input.email || "string" === typeof input.email || $guard(_exceptionable, {
            path: _path + ".email",
            expected: "(string | undefined)",
            value: input.email
        })) && (undefined === input.sequence || "number" === typeof input.sequence || $guard(_exceptionable, {
            path: _path + ".sequence",
            expected: "(number | undefined)",
            value: input.sequence
        }));
        return ("object" === typeof input && null !== input && false === Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Resolve<ObjectOptional>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as typia.Primitive<ObjectOptional>;
});
