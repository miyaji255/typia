import typia from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_validate } from "../internal/_test_validate";
export const test_validate_ToJsonNull = _test_validate("ToJsonNull", ToJsonNull.generate, (input) => ((input: any): typia.IValidation<ToJsonNull> => {
    const errors = [] as any[];
    const $report = (typia.validate as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ToJsonNull => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => [true || $report(_exceptionable, {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<ToJsonNull>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<ToJsonNull>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ToJsonNull>;
})(input));
