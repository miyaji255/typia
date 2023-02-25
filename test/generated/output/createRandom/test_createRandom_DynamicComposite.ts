import typia from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_random } from "../internal/_test_random";
export const test_createRandom_DynamicComposite = _test_random("DynamicComposite", (generator: typia.IRandomGenerator = (typia.createRandom as any).generator) => {
    const $generator = (typia.createRandom as any).generator;
    const $pick = (typia.createRandom as any).pick;
    const $ro0 = (recursive = false, depth = 0) => {
        const output = {
            id: (generator.string ?? $generator.string)(),
            name: (generator.string ?? $generator.string)()
        };
        (generator.array ?? $generator.array)(() => output[(generator.number ?? $generator.number)(0, 100)] = (generator.number ?? $generator.number)(0, 100), (generator.integer ?? $generator.integer)(0, 3));
        (generator.array ?? $generator.array)(() => output[`prefix_${(generator.string ?? $generator.string)()}`] = (generator.string ?? $generator.string)(), (generator.integer ?? $generator.integer)(0, 3));
        (generator.array ?? $generator.array)(() => output[`${(generator.string ?? $generator.string)()}_postfix`] = (generator.string ?? $generator.string)(), (generator.integer ?? $generator.integer)(0, 3));
        (generator.array ?? $generator.array)(() => output[`value_${(generator.number ?? $generator.number)(0, 100)}`] = $pick([
            () => (generator.string ?? $generator.string)(),
            () => (generator.number ?? $generator.number)(0, 100),
            () => (generator.boolean ?? $generator.boolean)()
        ])(), (generator.integer ?? $generator.integer)(0, 3));
        (generator.array ?? $generator.array)(() => output[`between_${(generator.string ?? $generator.string)()}_and_${(generator.number ?? $generator.number)(0, 100)}`] = (generator.boolean ?? $generator.boolean)(), (generator.integer ?? $generator.integer)(0, 3));
        return output;
    };
    return $ro0();
}, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    const $join = (typia.createAssert as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicComposite => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && (false === _exceptionable || Object.keys(input).every(key => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/^-?\d+\.?\d*$/).test(key))
                return "number" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "number",
                    value: value
                });
            if (RegExp(/^(prefix_(.*))/).test(key))
                return "string" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "string",
                    value: value
                });
            if (RegExp(/((.*)_postfix)$/).test(key))
                return "string" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "string",
                    value: value
                });
            if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
                return "string" === typeof value || "number" === typeof value || "boolean" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "(boolean | number | string)",
                    value: value
                });
            if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key))
                return "boolean" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "boolean",
                    value: value
                });
            return true;
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<DynamicComposite>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as typia.Primitive<DynamicComposite>;
});
