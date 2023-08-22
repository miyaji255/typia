import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_protobuf_validateEncode_TagBigInt =
    _test_protobuf_validateEncode("TagBigInt")<TagBigInt>(TagBigInt)({
        validateEncode: typia.protobuf.createValidateEncode<TagBigInt>(),
        message: typia.protobuf.message<TagBigInt>(),
        decode: typia.protobuf.createDecode<TagBigInt>(),
    });
