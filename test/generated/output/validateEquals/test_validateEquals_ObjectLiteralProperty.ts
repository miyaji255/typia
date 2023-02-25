import typia from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_validateEquals } from "../internal/_test_validateEquals";
export const test_validateEquals_ObjectLiteralProperty = _test_validateEquals("ObjectLiteralProperty", ObjectLiteralProperty.generate, (input) => ((input: any): typia.IValidation<ISomething> => {
    const errors = [] as any[];
    const $report = (typia.validateEquals as any).report(errors);
    const $join = (typia.validateEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is ISomething => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input["something-interesting-do-you-want?"] || $report(_exceptionable, {
                path: _path + "[\"something-interesting-do-you-want?\"]",
                expected: "string",
                value: input["something-interesting-do-you-want?"]
            }), "string" === typeof input["or-something-crazy-do-you-want?"] || $report(_exceptionable, {
                path: _path + "[\"or-something-crazy-do-you-want?\"]",
                expected: "string",
                value: input["or-something-crazy-do-you-want?"]
            }), 2 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).map(key => {
                if (["something-interesting-do-you-want?", "or-something-crazy-do-you-want?"].some(prop => key === prop))
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
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectLiteralProperty.ISomething>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectLiteralProperty.ISomething>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ISomething>;
})(input));
