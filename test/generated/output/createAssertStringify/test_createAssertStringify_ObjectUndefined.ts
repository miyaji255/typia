import typia from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_createAssertStringify_ObjectUndefined = _test_assertStringify("ObjectUndefined", ObjectUndefined.generate, (input: ObjectUndefined): string => { const assert = (input: any) => {
    const $guard = (typia.createAssertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectUndefined => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && (undefined === input.professor || "string" === typeof input.professor || "number" === typeof input.professor && !Number.isNaN(input.professor) || $guard(_exceptionable, {
            path: _path + ".professor",
            expected: "(number | string | undefined)",
            value: input.professor
        })) && (undefined === input.classroom || ("object" === typeof input.classroom && null !== input.classroom || $guard(_exceptionable, {
            path: _path + ".classroom",
            expected: "(Resolve<ObjectUndefined.IClassroom> | undefined)",
            value: input.classroom
        })) && $ao1(input.classroom, _path + ".classroom", true && _exceptionable)) && ("number" === typeof input.grade && !Number.isNaN(input.grade) || $guard(_exceptionable, {
            path: _path + ".grade",
            expected: "number",
            value: input.grade
        })) && ((null !== input.nothing || $guard(_exceptionable, {
            path: _path + ".nothing",
            expected: "undefined",
            value: input.nothing
        })) && (undefined === input.nothing || $guard(_exceptionable, {
            path: _path + ".nothing",
            expected: "undefined",
            value: input.nothing
        }))) && true && ((null !== input.never || $guard(_exceptionable, {
            path: _path + ".never",
            expected: "undefined",
            value: input.never
        })) && (undefined === input.never || $guard(_exceptionable, {
            path: _path + ".never",
            expected: "undefined",
            value: input.never
        })));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        }));
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<Resolve<ObjectUndefined.ILecture>>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<ObjectUndefined.ILecture>",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as ObjectUndefined;
}; const stringify = (input: ObjectUndefined): string => {
    const $string = (typia.createAssertStringify as any).string;
    const $throws = (typia.createAssertStringify as any).throws;
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.name;
    const $so0 = (input: any) => `{${undefined === input.professor ? "" : `"professor":${undefined !== input.professor ? (() => {
        if ("string" === typeof input.professor)
            return $string(input.professor);
        if ("number" === typeof input.professor)
            return input.professor;
        $throws({
            expected: "(number | string | undefined)",
            value: input.professor
        });
    })() : undefined},`}${undefined === input.classroom ? "" : `"classroom":${undefined !== input.classroom ? `{"id":${$string(input.classroom.id)},"name":${$string(input.classroom.name)}}` : undefined},`}${undefined === input.unknown || "function" === typeof input.unknown ? "" : `"unknown":${undefined !== input.unknown ? JSON.stringify(input.unknown) : undefined},`}"name":${$string(input.name)},"grade":${input.grade}}`;
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
}; return stringify(assert(input)); }, ObjectUndefined.SPOILERS);
