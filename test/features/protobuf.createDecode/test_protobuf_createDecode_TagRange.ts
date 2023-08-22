import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TagRange } from "../../structures/TagRange";

export const test_protobuf_decode_TagRange = _test_protobuf_decode(
    "TagRange",
)<TagRange>(TagRange)({
    decode: typia.protobuf.createDecode<TagRange>(),
    encode: typia.protobuf.createEncode<TagRange>(),
});
