import typia from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_validateClone_TagLength = _test_validateClone("TagLength", TagLength.generate, (input) => ((input: any): typia.IValidation<typia.Primitive<TagLength>> => { const validate = (input: any): typia.IValidation<TagLength> => {
    const errors = [] as any[];
    const $report = (typia.validateClone as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is TagLength => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.fixed && 5 === input.fixed.length || $report(_exceptionable, {
                path: _path + ".fixed",
                expected: "string",
                value: input.fixed
            }), "string" === typeof input.minimum && 3 <= input.minimum.length || $report(_exceptionable, {
                path: _path + ".minimum",
                expected: "string",
                value: input.minimum
            }), "string" === typeof input.maximum && 7 >= input.maximum.length || $report(_exceptionable, {
                path: _path + ".maximum",
                expected: "string",
                value: input.maximum
            }), "string" === typeof input.minimum_and_maximum && 3 <= input.minimum_and_maximum.length && 7 >= input.minimum_and_maximum.length || $report(_exceptionable, {
                path: _path + ".minimum_and_maximum",
                expected: "string",
                value: input.minimum_and_maximum
            })].every((flag: boolean) => flag);
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<TagLength.Type>>",
            value: input
        })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<TagLength.Type>",
            value: elem
        })) && $vo0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<TagLength.Type>",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<TagLength.Type>>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<TagLength>;
}; const clone = (input: TagLength): typia.Primitive<TagLength> => {
    const $co0 = (input: any) => ({
        fixed: input.fixed,
        minimum: input.minimum,
        maximum: input.maximum,
        minimum_and_maximum: input.minimum_and_maximum
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; })(input), TagLength.SPOILERS);
