import typia from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_assertStringify_ClassPropertyAssignment = _test_assertStringify("ClassPropertyAssignment", ClassPropertyAssignment.generate, (input) => ((input: ClassPropertyAssignment): string => { const assert = (input: any) => {
    const $guard = (typia.assertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ClassPropertyAssignment => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.id && !Number.isNaN(input.id) || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "number",
            value: input.id
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && ("assignment" === input.note || $guard(_exceptionable, {
            path: _path + ".note",
            expected: "\"assignment\"",
            value: input.note
        })) && (false === input.editable || $guard(_exceptionable, {
            path: _path + ".editable",
            expected: "false",
            value: input.editable
        })) && ("boolean" === typeof input.incremental || $guard(_exceptionable, {
            path: _path + ".incremental",
            expected: "boolean",
            value: input.incremental
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<ClassPropertyAssignment>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as ClassPropertyAssignment;
}; const stringify = (input: ClassPropertyAssignment): string => {
    const $string = (typia.assertStringify as any).string;
    const $throws = (typia.assertStringify as any).throws;
    const $so0 = (input: any) => `{"id":${input.id},"name":${$string(input.name)},"note":${(() => {
        if ("string" === typeof input.note)
            return $string(input.note);
        if ("string" === typeof input.note)
            return "\"" + input.note + "\"";
        $throws({
            expected: "\"assignment\"",
            value: input.note
        });
    })()},"editable":${input.editable},"incremental":${input.incremental}}`;
    return $so0(input);
}; return stringify(assert(input)); })(input), ClassPropertyAssignment.SPOILERS);
