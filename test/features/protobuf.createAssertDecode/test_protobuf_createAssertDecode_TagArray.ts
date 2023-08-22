import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TagArray } from "../../structures/TagArray";

export const test_protobuf_assertDecode_TagArray = _test_protobuf_assertDecode(
    "TagArray",
)<TagArray>(TagArray)({
    assertDecode: typia.protobuf.createAssertDecode<TagArray>(),
    encode: typia.protobuf.createEncode<TagArray>(),
});
