import typia from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_createValidateClone_ObjectOptional = _test_validateClone("ObjectOptional", ObjectOptional.generate, (input: any): typia.IValidation<typia.Primitive<ObjectOptional>> => { const validate = (input: any): typia.IValidation<ObjectOptional> => {
    const errors = [] as any[];
    const $report = (typia.createValidateClone as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectOptional => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => [undefined === input.id || "string" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "(string | undefined)",
                value: input.id
            }), undefined === input.name || "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "(string | undefined)",
                value: input.name
            }), undefined === input.email || "string" === typeof input.email || $report(_exceptionable, {
                path: _path + ".email",
                expected: "(string | undefined)",
                value: input.email
            }), undefined === input.sequence || "number" === typeof input.sequence && !Number.isNaN(input.sequence) || $report(_exceptionable, {
                path: _path + ".sequence",
                expected: "(number | undefined)",
                value: input.sequence
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input && false === Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectOptional>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectOptional>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ObjectOptional>;
}; const clone = (input: ObjectOptional): typia.Primitive<ObjectOptional> => {
    const $co0 = (input: any) => ({
        id: input.id,
        name: input.name,
        email: input.email,
        sequence: input.sequence
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; }, ObjectOptional.SPOILERS);
