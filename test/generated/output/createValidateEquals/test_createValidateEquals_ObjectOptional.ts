import typia from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_validateEquals } from "../internal/_test_validateEquals";
export const test_createValidateEquals_ObjectOptional = _test_validateEquals("ObjectOptional", ObjectOptional.generate, (input: any): typia.IValidation<ObjectOptional> => {
    const errors = [] as any[];
    const $report = (typia.createValidateEquals as any).report(errors);
    const $join = (typia.createValidateEquals as any).join;
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
            }), undefined === input.sequence || "number" === typeof input.sequence || $report(_exceptionable, {
                path: _path + ".sequence",
                expected: "(number | undefined)",
                value: input.sequence
            }), 0 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).map(key => {
                if (["id", "name", "email", "sequence"].some(prop => key === prop))
                    return true;
                const value = input[key];
                if (undefined === value)
                    return true;
                return $report(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value
                });
            }).every((flag: boolean) => flag))].every((flag: boolean) => flag);
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
});
