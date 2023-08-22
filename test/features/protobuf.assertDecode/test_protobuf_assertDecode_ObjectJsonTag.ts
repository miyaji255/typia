import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_protobuf_assertDecode_ObjectJsonTag =
    _test_protobuf_assertDecode("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<ObjectJsonTag>(input),
        encode: typia.protobuf.createEncode<ObjectJsonTag>(),
    });
