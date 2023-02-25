import typia from "../../../src";

import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_AtomicUnion = _test_assertParse(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.assertParse<AtomicUnion>(input),
    AtomicUnion.SPOILERS,
);
