import typia from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_equals } from "../internal/_test_equals";
export const test_equals_FunctionalTupleUnion = _test_equals("FunctionalTupleUnion", FunctionalTupleUnion.generate, (input) => ((input: any, _exceptionable: boolean): input is FunctionalTupleUnion => {
    return Array.isArray(input) && (input.length === 4 && (null !== input[0] && undefined !== input[0] && ("function" === typeof input[0] || "string" === typeof input[0] || "number" === typeof input[0])) && (null !== input[1] && undefined !== input[1] && ("function" === typeof input[1] || "string" === typeof input[1] || "number" === typeof input[1])) && (null !== input[2] && undefined !== input[2] && ("function" === typeof input[2] || "string" === typeof input[2] || "number" === typeof input[2])) && (null !== input[3] && undefined !== input[3] && ("function" === typeof input[3] || "string" === typeof input[3] || "number" === typeof input[3])));
})(input));
