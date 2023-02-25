import typia from "../../../src";
import { TagNaN } from "../../structures/TagNaN";
import { _test_prune } from "../internal/_test_prune";
export const test_createPrune_TagNaN = _test_prune("TagNaN", TagNaN.generate, (input: TagNaN): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("value" === key || "ranged" === key || "minimum" === key || "maximum" === key || "multipleOf" === key || "typed" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
});
