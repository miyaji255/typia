import typia from "../../../../src";
import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { TagType } from "../../../structures/TagType";

export const test_protobuf_validateDecode_TagType =
    _test_protobuf_validateDecode("TagType")<TagType>(TagType)({
        validateDecode: (input: Uint8Array): typia.IValidation<TagType> => {
            const validate = (input: any): typia.IValidation<TagType> => {
                const errors = [] as any[];
                const __is = (input: any): input is TagType => {
                    const $io0 = (input: any): boolean =>
                        Array.isArray(input.value) &&
                        input.value.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        );
                    const $io1 = (input: any): boolean =>
                        "number" === typeof input.int &&
                        Number.isFinite(input.int) &&
                        Math.floor(input.int) === input.int &&
                        -2147483648 <= input.int &&
                        input.int <= 2147483647 &&
                        "number" === typeof input.uint &&
                        Number.isFinite(input.uint) &&
                        Math.floor(input.uint) === input.uint &&
                        0 <= input.uint &&
                        input.uint <= 4294967295 &&
                        "number" === typeof input.int32 &&
                        Number.isFinite(input.int32) &&
                        Math.floor(input.int32) === input.int32 &&
                        -2147483648 <= input.int32 &&
                        input.int32 <= 2147483647 &&
                        "number" === typeof input.uint32 &&
                        Number.isFinite(input.uint32) &&
                        Math.floor(input.uint32) === input.uint32 &&
                        0 <= input.uint32 &&
                        input.uint32 <= 4294967295 &&
                        "number" === typeof input.int64 &&
                        Number.isFinite(input.int64) &&
                        Math.floor(input.int64) === input.int64 &&
                        -9223372036854776000 <= input.int64 &&
                        input.int64 <= 9223372036854776000 &&
                        "number" === typeof input.uint64 &&
                        Number.isFinite(input.uint64) &&
                        Math.floor(input.uint64) === input.uint64 &&
                        0 <= input.uint64 &&
                        input.uint64 <= 18446744073709552000 &&
                        "number" === typeof input.float &&
                        Number.isFinite(input.float) &&
                        -1.175494351e38 <= input.float &&
                        input.float <= 3.4028235e38;
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                if (false === __is(input)) {
                    const $report = (
                        typia.protobuf.createValidateDecode as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TagType => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.value) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "Array<TagType.Type>",
                                        value: input.value,
                                    })) &&
                                    input.value
                                        .map(
                                            (elem: any, _index1: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".value[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "TagType.Type",
                                                        value: elem,
                                                    })) &&
                                                    $vo1(
                                                        elem,
                                                        _path +
                                                            ".value[" +
                                                            _index1 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".value[" +
                                                        _index1 +
                                                        "]",
                                                    expected: "TagType.Type",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "Array<TagType.Type>",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("number" === typeof input.int &&
                                    Number.isFinite(input.int) &&
                                    (Math.floor(input.int) === input.int ||
                                        $report(_exceptionable, {
                                            path: _path + ".int",
                                            expected: "number (@type int)",
                                            value: input.int,
                                        })) &&
                                    ((-2147483648 <= input.int &&
                                        input.int <= 2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".int",
                                            expected: "number (@type int)",
                                            value: input.int,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".int",
                                        expected: "number",
                                        value: input.int,
                                    }),
                                ("number" === typeof input.uint &&
                                    Number.isFinite(input.uint) &&
                                    (Math.floor(input.uint) === input.uint ||
                                        $report(_exceptionable, {
                                            path: _path + ".uint",
                                            expected: "number (@type uint)",
                                            value: input.uint,
                                        })) &&
                                    (0 <= input.uint ||
                                        $report(_exceptionable, {
                                            path: _path + ".uint",
                                            expected: "number (@type uint)",
                                            value: input.uint,
                                        })) &&
                                    (input.uint <= 4294967295 ||
                                        $report(_exceptionable, {
                                            path: _path + ".uint",
                                            expected: "number (@type uint)",
                                            value: input.uint,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".uint",
                                        expected: "number",
                                        value: input.uint,
                                    }),
                                ("number" === typeof input.int32 &&
                                    Number.isFinite(input.int32) &&
                                    (Math.floor(input.int32) === input.int32 ||
                                        $report(_exceptionable, {
                                            path: _path + ".int32",
                                            expected: "number (@type int32)",
                                            value: input.int32,
                                        })) &&
                                    ((-2147483648 <= input.int32 &&
                                        input.int32 <= 2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".int32",
                                            expected: "number (@type int32)",
                                            value: input.int32,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".int32",
                                        expected: "number",
                                        value: input.int32,
                                    }),
                                ("number" === typeof input.uint32 &&
                                    Number.isFinite(input.uint32) &&
                                    (Math.floor(input.uint32) ===
                                        input.uint32 ||
                                        $report(_exceptionable, {
                                            path: _path + ".uint32",
                                            expected: "number (@type uint32)",
                                            value: input.uint32,
                                        })) &&
                                    (0 <= input.uint32 ||
                                        $report(_exceptionable, {
                                            path: _path + ".uint32",
                                            expected: "number (@type uint32)",
                                            value: input.uint32,
                                        })) &&
                                    (input.uint32 <= 4294967295 ||
                                        $report(_exceptionable, {
                                            path: _path + ".uint32",
                                            expected: "number (@type uint32)",
                                            value: input.uint32,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".uint32",
                                        expected: "number",
                                        value: input.uint32,
                                    }),
                                ("number" === typeof input.int64 &&
                                    Number.isFinite(input.int64) &&
                                    (Math.floor(input.int64) === input.int64 ||
                                        $report(_exceptionable, {
                                            path: _path + ".int64",
                                            expected: "number (@type int64)",
                                            value: input.int64,
                                        })) &&
                                    ((-9223372036854776000 <= input.int64 &&
                                        input.int64 <= 9223372036854776000) ||
                                        $report(_exceptionable, {
                                            path: _path + ".int64",
                                            expected: "number (@type int64)",
                                            value: input.int64,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".int64",
                                        expected: "number",
                                        value: input.int64,
                                    }),
                                ("number" === typeof input.uint64 &&
                                    Number.isFinite(input.uint64) &&
                                    (Math.floor(input.uint64) ===
                                        input.uint64 ||
                                        $report(_exceptionable, {
                                            path: _path + ".uint64",
                                            expected: "number (@type uint64)",
                                            value: input.uint64,
                                        })) &&
                                    (0 <= input.uint64 ||
                                        $report(_exceptionable, {
                                            path: _path + ".uint64",
                                            expected: "number (@type uint64)",
                                            value: input.uint64,
                                        })) &&
                                    (input.uint64 <= 18446744073709552000 ||
                                        $report(_exceptionable, {
                                            path: _path + ".uint64",
                                            expected: "number (@type uint64)",
                                            value: input.uint64,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".uint64",
                                        expected: "number",
                                        value: input.uint64,
                                    }),
                                ("number" === typeof input.float &&
                                    Number.isFinite(input.float) &&
                                    ((-1.175494351e38 <= input.float &&
                                        input.float <= 3.4028235e38) ||
                                        $report(_exceptionable, {
                                            path: _path + ".float",
                                            expected: "number (@type float)",
                                            value: input.float,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".float",
                                        expected: "number",
                                        value: input.float,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "TagType",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "TagType",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                }
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const decode = (input: Uint8Array): TagType => {
                const $Reader = (typia.protobuf.createValidateDecode as any)
                    .Reader;
                const $pdo0 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        value: [] as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.value.push(
                                    $pdo1(reader, reader.uint32()),
                                );
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const $pdo1 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        int: undefined as any,
                        uint: undefined as any,
                        int32: undefined as any,
                        uint32: undefined as any,
                        int64: undefined as any,
                        uint64: undefined as any,
                        float: undefined as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.int = reader.int32();
                                break;
                            case 2:
                                output.uint = reader.uint32();
                                break;
                            case 3:
                                output.int32 = reader.int32();
                                break;
                            case 4:
                                output.uint32 = reader.uint32();
                                break;
                            case 5:
                                output.int64 = Number(reader.int64());
                                break;
                            case 6:
                                output.uint64 = Number(reader.uint64());
                                break;
                            case 7:
                                output.float = reader.float();
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
            };
            const output = validate(input) as any;
            if (output.success) output.data = decode(input);
            return output;
        },
        encode: (input: TagType): Uint8Array => {
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "value";
                    if (0 !== input.value.length) {
                        for (const elem of input.value) {
                            writer.uint32(10);
                            writer.fork();
                            $peo1(elem);
                            writer.ldelim();
                        }
                    }
                };
                const $peo1 = (input: any): any => {
                    // property "int";
                    writer.uint32(8);
                    writer.int32(input.int);
                    // property "uint";
                    writer.uint32(16);
                    writer.uint32(input.uint);
                    // property "int32";
                    writer.uint32(24);
                    writer.int32(input.int32);
                    // property "uint32";
                    writer.uint32(32);
                    writer.uint32(input.uint32);
                    // property "int64";
                    writer.uint32(40);
                    writer.int64(input.int64);
                    // property "uint64";
                    writer.uint32(48);
                    writer.uint64(input.uint64);
                    // property "float";
                    writer.uint32(61);
                    writer.float(input.float);
                };
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.int &&
                    Math.floor(input.int) === input.int &&
                    -2147483648 <= input.int &&
                    input.int <= 2147483647 &&
                    "number" === typeof input.uint &&
                    Math.floor(input.uint) === input.uint &&
                    0 <= input.uint &&
                    input.uint <= 4294967295 &&
                    "number" === typeof input.int32 &&
                    Math.floor(input.int32) === input.int32 &&
                    -2147483648 <= input.int32 &&
                    input.int32 <= 2147483647 &&
                    "number" === typeof input.uint32 &&
                    Math.floor(input.uint32) === input.uint32 &&
                    0 <= input.uint32 &&
                    input.uint32 <= 4294967295 &&
                    "number" === typeof input.int64 &&
                    Math.floor(input.int64) === input.int64 &&
                    -9223372036854776000 <= input.int64 &&
                    input.int64 <= 9223372036854776000 &&
                    "number" === typeof input.uint64 &&
                    Math.floor(input.uint64) === input.uint64 &&
                    0 <= input.uint64 &&
                    input.uint64 <= 18446744073709552000 &&
                    "number" === typeof input.float &&
                    -1.175494351e38 <= input.float &&
                    input.float <= 3.4028235e38;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
