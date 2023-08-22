import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_protobuf_assertDecode_ObjectUnionExplicitPointer =
    _test_protobuf_assertDecode(
        "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<ObjectUnionExplicitPointer>(input),
        encode: typia.protobuf.createEncode<ObjectUnionExplicitPointer>(),
    });
