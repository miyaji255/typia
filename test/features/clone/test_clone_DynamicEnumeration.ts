import typia from "../../../src";

import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_DynamicEnumeration = _test_clone(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.clone(input),
);
