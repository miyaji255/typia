import typia from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_validateEquals } from "../internal/_test_validateEquals";
export const test_validateEquals_FunctionalPropertyUnion = _test_validateEquals("FunctionalPropertyUnion", FunctionalPropertyUnion.generate, (input) => ((input: any): typia.IValidation<FunctionalPropertyUnion> => {
    const errors = [] as any[];
    const $report = (typia.validateEquals as any).report(errors);
    const $join = (typia.validateEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is FunctionalPropertyUnion => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), (null !== input.closure || $report(_exceptionable, {
                path: _path + ".closure",
                expected: "(number | string)",
                value: input.closure
            })) && (undefined !== input.closure || $report(_exceptionable, {
                path: _path + ".closure",
                expected: "(number | string)",
                value: input.closure
            })) && ("function" === typeof input.closure || "string" === typeof input.closure || "number" === typeof input.closure || $report(_exceptionable, {
                path: _path + ".closure",
                expected: "(number | string)",
                value: input.closure
            })), 2 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).map(key => {
                if (["name", "closure"].some(prop => key === prop))
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
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<FunctionalPropertyUnion.IUnion>>",
            value: input
        })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<FunctionalPropertyUnion.IUnion>",
            value: elem
        })) && $vo0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<FunctionalPropertyUnion.IUnion>",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<FunctionalPropertyUnion.IUnion>>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<FunctionalPropertyUnion>;
})(input));
