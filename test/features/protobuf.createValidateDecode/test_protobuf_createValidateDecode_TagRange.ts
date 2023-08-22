import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TagRange } from "../../structures/TagRange";

export const test_protobuf_validateDecode_TagRange =
    _test_protobuf_validateDecode("TagRange")<TagRange>(TagRange)({
        validateDecode: typia.protobuf.createValidateDecode<TagRange>(),
        encode: typia.protobuf.createEncode<TagRange>(),
    });
