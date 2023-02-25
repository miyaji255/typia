import typia from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_validateStringify_ArrayMatrix = _test_validateStringify("ArrayMatrix", ArrayMatrix.generate, (input) => ((input: ArrayMatrix): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<ArrayMatrix> => {
    const errors = [] as any[];
    const $report = (typia.validateStringify as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ArrayMatrix => {
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<Array<Array<number>>>",
            value: input
        })) && input.map((elem: any, _index1: number) => (Array.isArray(elem) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Array<Array<number>>",
            value: elem
        })) && elem.map((elem: any, _index2: number) => (Array.isArray(elem) || $report(true, {
            path: _path + "[" + _index1 + "][" + _index2 + "]",
            expected: "Array<number>",
            value: elem
        })) && elem.map((elem: any, _index3: number) => "number" === typeof elem && !Number.isNaN(elem) || $report(true, {
            path: _path + "[" + _index1 + "][" + _index2 + "][" + _index3 + "]",
            expected: "number",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "[" + _index1 + "][" + _index2 + "]",
            expected: "Array<number>",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Array<Array<number>>",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<Array<Array<number>>>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ArrayMatrix>;
}; const stringify = (input: ArrayMatrix): string => {
    return `[${input.map((elem: any) => `[${elem.map((elem: any) => `[${elem.map((elem: any) => elem).join(",")}]`).join(",")}]`).join(",")}]`;
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; })(input), ArrayMatrix.SPOILERS);
