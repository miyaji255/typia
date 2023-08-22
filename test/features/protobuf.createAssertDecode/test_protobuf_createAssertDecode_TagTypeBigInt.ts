import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_protobuf_assertDecode_TagTypeBigInt =
    _test_protobuf_assertDecode("TagTypeBigInt")<TagTypeBigInt>(TagTypeBigInt)({
        assertDecode: typia.protobuf.createAssertDecode<TagTypeBigInt>(),
        encode: typia.protobuf.createEncode<TagTypeBigInt>(),
    });
