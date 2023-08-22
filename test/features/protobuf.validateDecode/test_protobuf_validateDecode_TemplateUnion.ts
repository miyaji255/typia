import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_validateDecode_TemplateUnion =
    _test_protobuf_validateDecode("TemplateUnion")<TemplateUnion>(
        TemplateUnion,
    )({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<TemplateUnion>(input),
        encode: typia.protobuf.createEncode<TemplateUnion>(),
    });
