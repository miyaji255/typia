import typia from "../../../../src";
import { _test_protobuf_decode } from "../../../internal/_test_protobuf_decode";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_protobuf_decode_DynamicSimple = _test_protobuf_decode(
    "DynamicSimple",
)<DynamicSimple>(DynamicSimple)({
    decode: (input) =>
        ((input: Uint8Array): DynamicSimple => {
            const $Reader = (typia.protobuf.decode as any).Reader;
            const $pdo0 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    value: {} as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            (() => {
                                const piece = reader.index() + reader.uint32();
                                const entry = {
                                    key: "" as any,
                                    value: undefined as any,
                                };
                                while (reader.index() < piece) {
                                    const kind = reader.uint32();
                                    switch (kind >>> 3) {
                                        case 1:
                                            entry.key = reader.string();
                                            break;
                                        case 2:
                                            entry.value = reader.double();
                                            break;
                                        default:
                                            reader.skipType(kind & 7);
                                            break;
                                    }
                                }
                                output.value[entry.key] = entry.value;
                            })();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const reader = new $Reader(input);
            return $pdo0(reader);
        })(input),
    encode: (input: DynamicSimple): Uint8Array => {
        const $join = (typia.protobuf.createEncode as any).join;
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
        const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
                // property "value";
                for (const [key, value] of Object.entries(input.value)) {
                    writer.uint32(10);
                    writer.fork();
                    writer.uint32(10);
                    writer.string(key);
                    writer.uint32(17);
                    writer.double(value);
                    writer.ldelim();
                }
            };
            const $io1 = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return "number" === typeof value;
                    return true;
                });
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    },
});
