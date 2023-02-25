import typia from "../../../src";

import { DynamicArray } from "../../structures/DynamicArray";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_DynamicArray = _test_isClone(
    "DynamicArray",
    DynamicArray.generate,
    (input) => typia.isClone(input),
    DynamicArray.SPOILERS,
);
