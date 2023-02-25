import typia from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_validate } from "../internal/_test_validate";
export const test_createValidate_ObjectRecursive = _test_validate("ObjectRecursive", ObjectRecursive.generate, (input: any): typia.IValidation<IDepartment> => {
    const errors = [] as any[];
    const $report = (typia.createValidate as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is IDepartment => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.parent && null !== input.parent || $report(_exceptionable, {
                path: _path + ".parent",
                expected: "Resolve<ObjectRecursive.IDepartment>",
                value: input.parent
            })) && $vo0(input.parent, _path + ".parent", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".parent",
                expected: "Resolve<ObjectRecursive.IDepartment>",
                value: input.parent
            }), "number" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id
            }), "string" === typeof input.code || $report(_exceptionable, {
                path: _path + ".code",
                expected: "string",
                value: input.code
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), "number" === typeof input.sequence || $report(_exceptionable, {
                path: _path + ".sequence",
                expected: "number",
                value: input.sequence
            }), ("object" === typeof input.created_at && null !== input.created_at || $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "Resolve<ObjectRecursive.ITimestamp>",
                value: input.created_at
            })) && $vo1(input.created_at, _path + ".created_at", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "Resolve<ObjectRecursive.ITimestamp>",
                value: input.created_at
            })].every((flag: boolean) => flag);
        const $vo1 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.time || $report(_exceptionable, {
                path: _path + ".time",
                expected: "number",
                value: input.time
            }), "number" === typeof input.zone || $report(_exceptionable, {
                path: _path + ".zone",
                expected: "number",
                value: input.zone
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectRecursive.IDepartment>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectRecursive.IDepartment>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<IDepartment>;
}, ObjectRecursive.SPOILERS);
