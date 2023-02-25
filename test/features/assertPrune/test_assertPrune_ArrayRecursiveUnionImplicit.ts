import typia from "../../../src";

import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_ArrayRecursiveUnionImplicit = _test_assertPrune(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) => typia.assertPrune(input),
    ArrayRecursiveUnionImplicit.SPOILERS,
);
