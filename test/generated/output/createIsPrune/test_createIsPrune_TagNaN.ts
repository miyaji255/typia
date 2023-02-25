import typia from "../../../src";
import { TagNaN } from "../../structures/TagNaN";
import { _test_isPrune } from "../internal/_test_isPrune";
export const test_createIsPrune_TagNaN = _test_isPrune("TagNaN", TagNaN.generate, (input: any): input is TagNaN => { const is = (input: any): input is TagNaN => {
    const $io0 = (input: any) => "number" === typeof input.value && ("number" === typeof input.ranged && 0 <= input.ranged && 100 >= input.ranged) && ("number" === typeof input.minimum && 0 <= input.minimum) && ("number" === typeof input.maximum && 100 >= input.maximum) && ("number" === typeof input.multipleOf && 0 === input.multipleOf % 3) && ("number" === typeof input.typed && parseInt(input.typed) === input.typed);
    return "object" === typeof input && null !== input && $io0(input);
}; const prune = (input: TagNaN): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("value" === key || "ranged" === key || "minimum" === key || "maximum" === key || "multipleOf" === key || "typed" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; if (!is(input))
    return false; prune(input); return true; }, TagNaN.SPOILERS);
