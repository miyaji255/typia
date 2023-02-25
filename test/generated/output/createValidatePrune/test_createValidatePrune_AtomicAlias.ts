import typia from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_validatePrune } from "../internal/_test_validatePrune";
export const test_createValidatePrune_AtomicAlias = _test_validatePrune("AtomicAlias", AtomicAlias.generate, (input: any): typia.IValidation<AtomicAlias> => { const validate = (input: any): typia.IValidation<AtomicAlias> => {
    const errors = [] as any[];
    const $report = (typia.createValidatePrune as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is AtomicAlias => {
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "[boolean, number, string]",
            value: input
        })) && ((input.length === 3 || $report(true, {
            path: _path + "",
            expected: "[boolean, number, string]",
            value: input
        })) && [
            "boolean" === typeof input[0] || $report(true, {
                path: _path + "[0]",
                expected: "boolean",
                value: input[0]
            }),
            "number" === typeof input[1] && !Number.isNaN(input[1]) || $report(true, {
                path: _path + "[1]",
                expected: "number",
                value: input[1]
            }),
            "string" === typeof input[2] || $report(true, {
                path: _path + "[2]",
                expected: "string",
                value: input[2]
            })
        ].every((flag: boolean) => flag)) || $report(true, {
            path: _path + "",
            expected: "[boolean, number, string]",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<AtomicAlias>;
}; const prune = (input: AtomicAlias): void => {
}; const output = validate(input); if (output.success)
    prune(input); return output; }, AtomicAlias.SPOILERS);
