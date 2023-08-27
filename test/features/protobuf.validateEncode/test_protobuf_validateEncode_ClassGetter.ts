import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_protobuf_validateEncode_ClassGetter =
    _test_protobuf_validateEncode("ClassGetter")<ClassGetter>(ClassGetter)({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<ClassGetter>(input),
        message: typia.protobuf.message<ClassGetter>(),
        decode: typia.protobuf.createDecode<ClassGetter>(),
    });