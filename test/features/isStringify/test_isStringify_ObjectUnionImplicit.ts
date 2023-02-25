import typia from "../../../src";

import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ObjectUnionImplicit = _test_isStringify(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.isStringify(input),
    ObjectUnionImplicit.SPOILERS,
);
