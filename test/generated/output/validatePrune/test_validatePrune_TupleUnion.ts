import typia from "../../../src";
import { TupleUnion } from "../../structures/TupleUnion";
import { _test_validatePrune } from "../internal/_test_validatePrune";
export const test_validatePrune_TupleUnion = _test_validatePrune("TupleUnion", TupleUnion.generate, (input) => ((input: any): typia.IValidation<TupleUnion> => { const validate = (input: any): typia.IValidation<TupleUnion> => {
    const errors = [] as any[];
    const $report = (typia.validatePrune as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is TupleUnion => {
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<([] | [boolean, number] | [number, string, boolean])>",
            value: input
        })) && input.map((elem: any, _index1: number) => (Array.isArray(elem) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "([] | [boolean, number] | [number, string, boolean])",
            value: elem
        })) && (() => {
            const tupleList = [[top => elem.length === 3 && [
                        "number" === typeof elem[0] && !Number.isNaN(elem[0]),
                        "string" === typeof elem[1],
                        "boolean" === typeof elem[2]
                    ].every((flag: boolean) => flag), top => (top.length === 3 || $report(true, {
                        path: _path + "[" + _index1 + "]",
                        expected: "[number, string, boolean]",
                        value: top
                    })) && [
                        "number" === typeof top[0] && !Number.isNaN(top[0]) || $report(true, {
                            path: _path + "[" + _index1 + "][0]",
                            expected: "number",
                            value: top[0]
                        }),
                        "string" === typeof top[1] || $report(true, {
                            path: _path + "[" + _index1 + "][1]",
                            expected: "string",
                            value: top[1]
                        }),
                        "boolean" === typeof top[2] || $report(true, {
                            path: _path + "[" + _index1 + "][2]",
                            expected: "boolean",
                            value: top[2]
                        })
                    ].every((flag: boolean) => flag)], [top => elem.length === 2 && [
                        "boolean" === typeof elem[0],
                        "number" === typeof elem[1] && !Number.isNaN(elem[1])
                    ].every((flag: boolean) => flag), top => (top.length === 2 || $report(true, {
                        path: _path + "[" + _index1 + "]",
                        expected: "[boolean, number]",
                        value: top
                    })) && [
                        "boolean" === typeof top[0] || $report(true, {
                            path: _path + "[" + _index1 + "][0]",
                            expected: "boolean",
                            value: top[0]
                        }),
                        "number" === typeof top[1] && !Number.isNaN(top[1]) || $report(true, {
                            path: _path + "[" + _index1 + "][1]",
                            expected: "number",
                            value: top[1]
                        })
                    ].every((flag: boolean) => flag)], [top => elem.length === 0 && [].every((flag: boolean) => flag), top => (top.length === 0 || $report(true, {
                        path: _path + "[" + _index1 + "]",
                        expected: "[]",
                        value: top
                    })) && [].every((flag: boolean) => flag)]];
            const front = elem;
            const filtered = tupleList.filter(tuple => true === tuple[0](front));
            if (1 === filtered.length)
                return filtered[0][1](elem);
            const array = elem;
            if (1 < filtered.length)
                for (const tuple of filtered)
                    if (array.every((value: any) => true === tuple[0](value)))
                        return tuple[1](array);
            return $report(_exceptionable, {
                path: _path + "[" + _index1 + "]",
                expected: "([number, string, boolean] | [boolean, number] | [])",
                value: elem
            });
        })() || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "([] | [boolean, number] | [number, string, boolean])",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<([] | [boolean, number] | [number, string, boolean])>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<TupleUnion>;
}; const prune = (input: TupleUnion): void => {
}; const output = validate(input); if (output.success)
    prune(input); return output; })(input), TupleUnion.SPOILERS);
