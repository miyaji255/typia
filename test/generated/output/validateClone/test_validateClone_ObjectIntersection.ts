import typia from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_validateClone_ObjectIntersection = _test_validateClone("ObjectIntersection", ObjectIntersection.generate, (input) => ((input: any): typia.IValidation<typia.Primitive<ObjectIntersection>> => { const validate = (input: any): typia.IValidation<ObjectIntersection> => {
    const errors = [] as any[];
    const $report = (typia.validateClone as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectIntersection => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.email || $report(_exceptionable, {
                path: _path + ".email",
                expected: "string",
                value: input.email
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), "boolean" === typeof input.vulnerable || $report(_exceptionable, {
                path: _path + ".vulnerable",
                expected: "boolean",
                value: input.vulnerable
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectIntersection>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectIntersection>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ObjectIntersection>;
}; const clone = (input: ObjectIntersection): typia.Primitive<ObjectIntersection> => {
    const $co0 = (input: any) => ({
        email: input.email,
        name: input.name,
        vulnerable: input.vulnerable
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; })(input), ObjectIntersection.SPOILERS);
