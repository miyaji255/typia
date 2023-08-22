import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_protobuf_assertDecode_TemplateAtomic =
    _test_protobuf_assertDecode("TemplateAtomic")<TemplateAtomic>(
        TemplateAtomic,
    )({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<TemplateAtomic>(input),
        encode: typia.protobuf.createEncode<TemplateAtomic>(),
    });
