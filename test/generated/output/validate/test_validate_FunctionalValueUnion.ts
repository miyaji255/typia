import typia from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_validate } from "../internal/_test_validate";
export const test_validate_FunctionalValueUnion = _test_validate("FunctionalValueUnion", FunctionalValueUnion.generate, (input) => ((input: any): typia.IValidation<FunctionalValueUnion> => {
    const errors = [] as any[];
    const $report = (typia.validate as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is FunctionalValueUnion => {
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<(number | string)>",
            value: input
        })) && input.map((elem: any, _index1: number) => (null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(number | string)",
            value: elem
        })) && (undefined !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(number | string)",
            value: elem
        })) && ("function" === typeof elem || "string" === typeof elem || "number" === typeof elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(number | string)",
            value: elem
        }))).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<(number | string)>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<FunctionalValueUnion>;
})(input), FunctionalValueUnion.SPOILERS);
