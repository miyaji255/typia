import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_protobuf_decode_TagTypeBigInt = _test_protobuf_decode(
    "TagTypeBigInt",
)<TagTypeBigInt>(TagTypeBigInt)({
    decode: typia.protobuf.createDecode<TagTypeBigInt>(),
    encode: typia.protobuf.createEncode<TagTypeBigInt>(),
});
