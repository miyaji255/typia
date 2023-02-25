import typia from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_isParse } from "../internal/_test_isParse";
export const test_isParse_TagRange = _test_isParse("TagRange", TagRange.generate, (input) => ((input: any): typia.Primitive<TagRange> => { const is = (input: any): input is TagRange => {
    const $io0 = (input: any) => "number" === typeof input.greater && 3 < input.greater && ("number" === typeof input.greater_equal && 3 <= input.greater_equal) && ("number" === typeof input.less && 7 > input.less) && ("number" === typeof input.less_equal && 7 >= input.less_equal) && ("number" === typeof input.greater_less && 3 < input.greater_less && 7 > input.greater_less) && ("number" === typeof input.greater_equal_less && 3 <= input.greater_equal_less && 7 > input.greater_equal_less) && ("number" === typeof input.greater_less_equal && 3 < input.greater_less_equal && 7 >= input.greater_less_equal) && ("number" === typeof input.greater_equal_less_equal && 3 <= input.greater_equal_less_equal && 7 >= input.greater_equal_less_equal);
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; input = JSON.parse(input); return is(input) ? input as any : null; })(input), TagRange.SPOILERS);
