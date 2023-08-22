import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_protobuf_assertDecode_TagInfinite =
    _test_protobuf_assertDecode("TagInfinite")<TagInfinite>(TagInfinite)({
        assertDecode: typia.protobuf.createAssertDecode<TagInfinite>(),
        encode: typia.protobuf.createEncode<TagInfinite>(),
    });
