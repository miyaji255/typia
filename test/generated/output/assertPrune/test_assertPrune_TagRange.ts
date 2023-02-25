import typia from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_assertPrune } from "../internal/_test_assertPrune";
export const test_assertPrune_TagRange = _test_assertPrune("TagRange", TagRange.generate, (input) => ((input: any): TagRange => { const assert = (input: any) => {
    const $guard = (typia.assertPrune as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is TagRange => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.greater && 3 < input.greater || $guard(_exceptionable, {
            path: _path + ".greater",
            expected: "number",
            value: input.greater
        })) && ("number" === typeof input.greater_equal && 3 <= input.greater_equal || $guard(_exceptionable, {
            path: _path + ".greater_equal",
            expected: "number",
            value: input.greater_equal
        })) && ("number" === typeof input.less && 7 > input.less || $guard(_exceptionable, {
            path: _path + ".less",
            expected: "number",
            value: input.less
        })) && ("number" === typeof input.less_equal && 7 >= input.less_equal || $guard(_exceptionable, {
            path: _path + ".less_equal",
            expected: "number",
            value: input.less_equal
        })) && ("number" === typeof input.greater_less && 3 < input.greater_less && 7 > input.greater_less || $guard(_exceptionable, {
            path: _path + ".greater_less",
            expected: "number",
            value: input.greater_less
        })) && ("number" === typeof input.greater_equal_less && 3 <= input.greater_equal_less && 7 > input.greater_equal_less || $guard(_exceptionable, {
            path: _path + ".greater_equal_less",
            expected: "number",
            value: input.greater_equal_less
        })) && ("number" === typeof input.greater_less_equal && 3 < input.greater_less_equal && 7 >= input.greater_less_equal || $guard(_exceptionable, {
            path: _path + ".greater_less_equal",
            expected: "number",
            value: input.greater_less_equal
        })) && ("number" === typeof input.greater_equal_less_equal && 3 <= input.greater_equal_less_equal && 7 >= input.greater_equal_less_equal || $guard(_exceptionable, {
            path: _path + ".greater_equal_less_equal",
            expected: "number",
            value: input.greater_equal_less_equal
        }));
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<Resolve<TagRange.Type>>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<TagRange.Type>",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as TagRange;
}; const prune = (input: TagRange): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("greater" === key || "greater_equal" === key || "less" === key || "less_equal" === key || "greater_less" === key || "greater_equal_less" === key || "greater_less_equal" === key || "greater_equal_less_equal" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input))
        input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem)
                $po0(elem);
        });
}; assert(input); prune(input); return input; })(input), TagRange.SPOILERS);
