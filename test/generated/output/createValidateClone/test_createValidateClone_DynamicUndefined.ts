import typia from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_createValidateClone_DynamicUndefined = _test_validateClone("DynamicUndefined", DynamicUndefined.generate, (input: any): typia.IValidation<typia.Primitive<DynamicUndefined>> => { const validate = (input: any): typia.IValidation<DynamicUndefined> => {
    const errors = [] as any[];
    const $report = (typia.createValidateClone as any).report(errors);
    const $join = (typia.createValidateClone as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicUndefined => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => [false === _exceptionable || Object.keys(input).map(key => {
                const value = input[key];
                if (undefined === value)
                    return true;
                if (RegExp(/(.*)/).test(key))
                    return (null !== value || $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value
                    })) && (undefined === value || $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value
                    }));
                return true;
            }).every((flag: boolean) => flag)].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input && false === Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Resolve<DynamicUndefined>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<DynamicUndefined>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<DynamicUndefined>;
}; const clone = (input: DynamicUndefined): typia.Primitive<DynamicUndefined> => {
    const $join = (typia.createValidateClone as any).join;
    const $co0 = (input: any) => { const output = {}; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/(.*)/).test(key)) {
            output[key] = value;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; }, DynamicUndefined.SPOILERS);
