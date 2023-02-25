import typia from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_validateEquals } from "../internal/_test_validateEquals";
export const test_validateEquals_ObjectClosure = _test_validateEquals("ObjectClosure", ObjectClosure.generate, (input) => ((input: any): typia.IValidation<{ id: string; open: () => string; }> => {
    const errors = [] as any[];
    const $report = (typia.validateEquals as any).report(errors);
    const $join = (typia.validateEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is { id: string; open: () => string; } => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id
            }), true || $report(_exceptionable, {
                path: _path + ".open",
                expected: "unknown",
                value: input.open
            }), 2 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).map(key => {
                if (["id", "open"].some(prop => key === prop))
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
            expected: "Resolve<__object>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<__object>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<{ id: string; open: () => string; }>;
})(input));
