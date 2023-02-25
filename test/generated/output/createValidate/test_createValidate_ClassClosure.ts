import typia from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_validate } from "../internal/_test_validate";
export const test_createValidate_ClassClosure = _test_validate("ClassClosure", ClassClosure.generate, (input: any): typia.IValidation<Something> => {
    const errors = [] as any[];
    const $report = (typia.createValidate as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is Something => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id
            }), "something" === input.type || $report(_exceptionable, {
                path: _path + ".type",
                expected: "\"something\"",
                value: input.type
            }), true || $report(_exceptionable, {
                path: _path + ".closure",
                expected: "unknown",
                value: input.closure
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<ClassClosure.Something>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<ClassClosure.Something>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<Something>;
}, ClassClosure.SPOILERS);
