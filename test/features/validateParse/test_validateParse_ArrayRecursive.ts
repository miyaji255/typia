import typia from "../../../src";

import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ArrayRecursive = _test_validateParse(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.validateParse<ArrayRecursive>(input),
    ArrayRecursive.SPOILERS,
);
