import typia from "../../../src";

import { ArrayAny } from "../../structures/ArrayAny";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ArrayAny = _test_isClone(
    "ArrayAny",
    ArrayAny.generate,
    typia.createIsClone<ArrayAny>(),
    ArrayAny.SPOILERS,
);
