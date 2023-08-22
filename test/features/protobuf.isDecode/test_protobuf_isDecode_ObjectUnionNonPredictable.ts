import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_protobuf_isDecode_ObjectUnionNonPredictable =
    _test_protobuf_isDecode(
        "ObjectUnionNonPredictable",
    )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
        isDecode: (input) =>
            typia.protobuf.isDecode<ObjectUnionNonPredictable>(input),
        encode: typia.protobuf.createEncode<ObjectUnionNonPredictable>(),
    });
