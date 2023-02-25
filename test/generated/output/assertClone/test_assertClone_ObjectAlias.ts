import typia from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_assertClone_ObjectAlias = _test_assertClone("ObjectAlias", ObjectAlias.generate, (input) => ((input: any): typia.Primitive<ObjectAlias> => { const assert = (input: any) => {
    const $guard = (typia.assertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectAlias => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("string" === typeof input.email || $guard(_exceptionable, {
            path: _path + ".email",
            expected: "string",
            value: input.email
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && (1 === input.sex || 2 === input.sex || "male" === input.sex || "female" === input.sex || $guard(_exceptionable, {
            path: _path + ".sex",
            expected: "(\"female\" | \"male\" | 1 | 2)",
            value: input.sex
        })) && ("number" === typeof input.age || $guard(_exceptionable, {
            path: _path + ".age",
            expected: "number",
            value: input.age
        })) && ("boolean" === typeof input.dead || $guard(_exceptionable, {
            path: _path + ".dead",
            expected: "boolean",
            value: input.dead
        }));
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<Resolve<ObjectAlias.IMember>>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<ObjectAlias.IMember>",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as ObjectAlias;
}; const clone = (input: ObjectAlias): typia.Primitive<ObjectAlias> => {
    const $co0 = (input: any) => ({
        id: input.id,
        email: input.email,
        name: input.name,
        sex: input.sex,
        age: input.age,
        dead: input.dead
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
}; assert(input); const output = clone(input); /* Array */; return output as ObjectAlias; })(input), ObjectAlias.SPOILERS);
