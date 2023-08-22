import typia from "../../../../src";
import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { TagDefault } from "../../../structures/TagDefault";

export const test_protobuf_validateDecode_TagDefault =
    _test_protobuf_validateDecode("TagDefault")<TagDefault>(TagDefault)({
        validateDecode: (input) =>
            ((input: Uint8Array): typia.IValidation<TagDefault> => {
                const validate = (
                    input: any,
                ): typia.IValidation<TagDefault> => {
                    const errors = [] as any[];
                    const __is = (input: any): input is TagDefault => {
                        const $is_custom = (
                            typia.protobuf.validateDecode as any
                        ).is_custom;
                        const $io0 = (input: any): boolean =>
                            "boolean" === typeof input.boolean &&
                            "number" === typeof input.number &&
                            Number.isFinite(input.number) &&
                            $is_custom(
                                "default",
                                "number",
                                "1",
                                input.number,
                            ) &&
                            "string" === typeof input.string &&
                            $is_custom(
                                "default",
                                "string",
                                "two",
                                input.string,
                            ) &&
                            "string" === typeof input.text &&
                            $is_custom(
                                "default",
                                "string",
                                "Very long text, can you understand it?",
                                input.text,
                            ) &&
                            "string" === typeof input.template &&
                            RegExp(/^prefix_(.*)/).test(input.template) &&
                            $is_custom(
                                "default",
                                "string",
                                "prefix_A",
                                input.template,
                            ) &&
                            (("string" ===
                                typeof input.boolean_and_number_and_string &&
                                $is_custom(
                                    "default",
                                    "string",
                                    "false",
                                    input.boolean_and_number_and_string,
                                ) &&
                                $is_custom(
                                    "default",
                                    "string",
                                    "1",
                                    input.boolean_and_number_and_string,
                                ) &&
                                $is_custom(
                                    "default",
                                    "string",
                                    "two",
                                    input.boolean_and_number_and_string,
                                )) ||
                                ("number" ===
                                    typeof input.boolean_and_number_and_string &&
                                    Number.isFinite(
                                        input.boolean_and_number_and_string,
                                    ) &&
                                    $is_custom(
                                        "default",
                                        "number",
                                        "false",
                                        input.boolean_and_number_and_string,
                                    ) &&
                                    $is_custom(
                                        "default",
                                        "number",
                                        "1",
                                        input.boolean_and_number_and_string,
                                    ) &&
                                    $is_custom(
                                        "default",
                                        "number",
                                        "two",
                                        input.boolean_and_number_and_string,
                                    )) ||
                                "boolean" ===
                                    typeof input.boolean_and_number_and_string) &&
                            (("string" === typeof input.union_but_boolean &&
                                $is_custom(
                                    "default",
                                    "string",
                                    "false",
                                    input.union_but_boolean,
                                )) ||
                                ("number" === typeof input.union_but_boolean &&
                                    Number.isFinite(input.union_but_boolean) &&
                                    $is_custom(
                                        "default",
                                        "number",
                                        "false",
                                        input.union_but_boolean,
                                    )) ||
                                "boolean" === typeof input.union_but_boolean) &&
                            (("string" === typeof input.union_but_number &&
                                $is_custom(
                                    "default",
                                    "string",
                                    "1",
                                    input.union_but_number,
                                )) ||
                                ("number" === typeof input.union_but_number &&
                                    Number.isFinite(input.union_but_number) &&
                                    $is_custom(
                                        "default",
                                        "number",
                                        "1",
                                        input.union_but_number,
                                    )) ||
                                "boolean" === typeof input.union_but_number) &&
                            (("string" === typeof input.union_but_string &&
                                $is_custom(
                                    "default",
                                    "string",
                                    "two",
                                    input.union_but_string,
                                )) ||
                                ("number" === typeof input.union_but_string &&
                                    Number.isFinite(input.union_but_string) &&
                                    $is_custom(
                                        "default",
                                        "number",
                                        "two",
                                        input.union_but_string,
                                    )) ||
                                "boolean" === typeof input.union_but_string) &&
                            "number" === typeof input.vulnerable_range &&
                            3 <= input.vulnerable_range &&
                            5 >= input.vulnerable_range &&
                            $is_custom(
                                "default",
                                "number",
                                "7",
                                input.vulnerable_range,
                            ) &&
                            "string" === typeof input.vulnerable_template &&
                            RegExp(/^prefix_(.*)/).test(
                                input.vulnerable_template,
                            ) &&
                            $is_custom(
                                "default",
                                "string",
                                "two",
                                input.vulnerable_template,
                            ) &&
                            null !== input.boolean_and_number_and_template &&
                            undefined !==
                                input.boolean_and_number_and_template &&
                            (("number" ===
                                typeof input.boolean_and_number_and_template &&
                                Number.isFinite(
                                    input.boolean_and_number_and_template,
                                ) &&
                                $is_custom(
                                    "default",
                                    "number",
                                    "false",
                                    input.boolean_and_number_and_template,
                                ) &&
                                $is_custom(
                                    "default",
                                    "number",
                                    "1",
                                    input.boolean_and_number_and_template,
                                ) &&
                                $is_custom(
                                    "default",
                                    "number",
                                    "prefix_B",
                                    input.boolean_and_number_and_template,
                                )) ||
                                "boolean" ===
                                    typeof input.boolean_and_number_and_template ||
                                ("string" ===
                                    typeof input.boolean_and_number_and_template &&
                                    RegExp(/^prefix_(.*)/).test(
                                        input.boolean_and_number_and_template,
                                    ) &&
                                    $is_custom(
                                        "default",
                                        "string",
                                        "false",
                                        input.boolean_and_number_and_template,
                                    ) &&
                                    $is_custom(
                                        "default",
                                        "string",
                                        "1",
                                        input.boolean_and_number_and_template,
                                    ) &&
                                    $is_custom(
                                        "default",
                                        "string",
                                        "prefix_B",
                                        input.boolean_and_number_and_template,
                                    )));
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            $io0(input)
                        );
                    };
                    if (false === __is(input)) {
                        const $report = (
                            typia.protobuf.validateDecode as any
                        ).report(errors);
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is TagDefault => {
                            const $is_custom = (
                                typia.protobuf.validateDecode as any
                            ).is_custom;
                            const $vo0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    "boolean" === typeof input.boolean ||
                                        $report(_exceptionable, {
                                            path: _path + ".boolean",
                                            expected: "boolean",
                                            value: input.boolean,
                                        }),
                                    ("number" === typeof input.number &&
                                        Number.isFinite(input.number) &&
                                        ($is_custom(
                                            "default",
                                            "number",
                                            "1",
                                            input.number,
                                        ) ||
                                            $report(_exceptionable, {
                                                path: _path + ".number",
                                                expected: "number (@default 1)",
                                                value: input.number,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".number",
                                            expected: "number",
                                            value: input.number,
                                        }),
                                    ("string" === typeof input.string &&
                                        ($is_custom(
                                            "default",
                                            "string",
                                            "two",
                                            input.string,
                                        ) ||
                                            $report(_exceptionable, {
                                                path: _path + ".string",
                                                expected:
                                                    "string (@default two)",
                                                value: input.string,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".string",
                                            expected: "string",
                                            value: input.string,
                                        }),
                                    ("string" === typeof input.text &&
                                        ($is_custom(
                                            "default",
                                            "string",
                                            "Very long text, can you understand it?",
                                            input.text,
                                        ) ||
                                            $report(_exceptionable, {
                                                path: _path + ".text",
                                                expected:
                                                    "string (@default Very long text, can you understand it?)",
                                                value: input.text,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".text",
                                            expected: "string",
                                            value: input.text,
                                        }),
                                    ("string" === typeof input.template &&
                                        RegExp(/^prefix_(.*)/).test(
                                            input.template,
                                        ) &&
                                        ($is_custom(
                                            "default",
                                            "string",
                                            "prefix_A",
                                            input.template,
                                        ) ||
                                            $report(_exceptionable, {
                                                path: _path + ".template",
                                                expected:
                                                    "string (@default prefix_A)",
                                                value: input.template,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".template",
                                            expected: "`prefix_${string}`",
                                            value: input.template,
                                        }),
                                    ("string" ===
                                        typeof input.boolean_and_number_and_string &&
                                        ($is_custom(
                                            "default",
                                            "string",
                                            "false",
                                            input.boolean_and_number_and_string,
                                        ) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".boolean_and_number_and_string",
                                                expected:
                                                    "string (@default false)",
                                                value: input.boolean_and_number_and_string,
                                            })) &&
                                        ($is_custom(
                                            "default",
                                            "string",
                                            "1",
                                            input.boolean_and_number_and_string,
                                        ) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".boolean_and_number_and_string",
                                                expected: "string (@default 1)",
                                                value: input.boolean_and_number_and_string,
                                            })) &&
                                        ($is_custom(
                                            "default",
                                            "string",
                                            "two",
                                            input.boolean_and_number_and_string,
                                        ) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".boolean_and_number_and_string",
                                                expected:
                                                    "string (@default two)",
                                                value: input.boolean_and_number_and_string,
                                            }))) ||
                                        ("number" ===
                                            typeof input.boolean_and_number_and_string &&
                                            Number.isFinite(
                                                input.boolean_and_number_and_string,
                                            ) &&
                                            ($is_custom(
                                                "default",
                                                "number",
                                                "false",
                                                input.boolean_and_number_and_string,
                                            ) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".boolean_and_number_and_string",
                                                    expected:
                                                        "number (@default false)",
                                                    value: input.boolean_and_number_and_string,
                                                })) &&
                                            ($is_custom(
                                                "default",
                                                "number",
                                                "1",
                                                input.boolean_and_number_and_string,
                                            ) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".boolean_and_number_and_string",
                                                    expected:
                                                        "number (@default 1)",
                                                    value: input.boolean_and_number_and_string,
                                                })) &&
                                            ($is_custom(
                                                "default",
                                                "number",
                                                "two",
                                                input.boolean_and_number_and_string,
                                            ) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".boolean_and_number_and_string",
                                                    expected:
                                                        "number (@default two)",
                                                    value: input.boolean_and_number_and_string,
                                                }))) ||
                                        "boolean" ===
                                            typeof input.boolean_and_number_and_string ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".boolean_and_number_and_string",
                                            expected:
                                                "(boolean | number | string)",
                                            value: input.boolean_and_number_and_string,
                                        }),
                                    ("string" ===
                                        typeof input.union_but_boolean &&
                                        ($is_custom(
                                            "default",
                                            "string",
                                            "false",
                                            input.union_but_boolean,
                                        ) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".union_but_boolean",
                                                expected:
                                                    "string (@default false)",
                                                value: input.union_but_boolean,
                                            }))) ||
                                        ("number" ===
                                            typeof input.union_but_boolean &&
                                            Number.isFinite(
                                                input.union_but_boolean,
                                            ) &&
                                            ($is_custom(
                                                "default",
                                                "number",
                                                "false",
                                                input.union_but_boolean,
                                            ) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".union_but_boolean",
                                                    expected:
                                                        "number (@default false)",
                                                    value: input.union_but_boolean,
                                                }))) ||
                                        "boolean" ===
                                            typeof input.union_but_boolean ||
                                        $report(_exceptionable, {
                                            path: _path + ".union_but_boolean",
                                            expected:
                                                "(boolean | number | string)",
                                            value: input.union_but_boolean,
                                        }),
                                    ("string" ===
                                        typeof input.union_but_number &&
                                        ($is_custom(
                                            "default",
                                            "string",
                                            "1",
                                            input.union_but_number,
                                        ) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path + ".union_but_number",
                                                expected: "string (@default 1)",
                                                value: input.union_but_number,
                                            }))) ||
                                        ("number" ===
                                            typeof input.union_but_number &&
                                            Number.isFinite(
                                                input.union_but_number,
                                            ) &&
                                            ($is_custom(
                                                "default",
                                                "number",
                                                "1",
                                                input.union_but_number,
                                            ) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".union_but_number",
                                                    expected:
                                                        "number (@default 1)",
                                                    value: input.union_but_number,
                                                }))) ||
                                        "boolean" ===
                                            typeof input.union_but_number ||
                                        $report(_exceptionable, {
                                            path: _path + ".union_but_number",
                                            expected:
                                                "(boolean | number | string)",
                                            value: input.union_but_number,
                                        }),
                                    ("string" ===
                                        typeof input.union_but_string &&
                                        ($is_custom(
                                            "default",
                                            "string",
                                            "two",
                                            input.union_but_string,
                                        ) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path + ".union_but_string",
                                                expected:
                                                    "string (@default two)",
                                                value: input.union_but_string,
                                            }))) ||
                                        ("number" ===
                                            typeof input.union_but_string &&
                                            Number.isFinite(
                                                input.union_but_string,
                                            ) &&
                                            ($is_custom(
                                                "default",
                                                "number",
                                                "two",
                                                input.union_but_string,
                                            ) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".union_but_string",
                                                    expected:
                                                        "number (@default two)",
                                                    value: input.union_but_string,
                                                }))) ||
                                        "boolean" ===
                                            typeof input.union_but_string ||
                                        $report(_exceptionable, {
                                            path: _path + ".union_but_string",
                                            expected:
                                                "(boolean | number | string)",
                                            value: input.union_but_string,
                                        }),
                                    ("number" ===
                                        typeof input.vulnerable_range &&
                                        (3 <= input.vulnerable_range ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path + ".vulnerable_range",
                                                expected: "number (@minimum 3)",
                                                value: input.vulnerable_range,
                                            })) &&
                                        (5 >= input.vulnerable_range ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path + ".vulnerable_range",
                                                expected: "number (@maximum 5)",
                                                value: input.vulnerable_range,
                                            })) &&
                                        ($is_custom(
                                            "default",
                                            "number",
                                            "7",
                                            input.vulnerable_range,
                                        ) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path + ".vulnerable_range",
                                                expected: "number (@default 7)",
                                                value: input.vulnerable_range,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".vulnerable_range",
                                            expected: "number",
                                            value: input.vulnerable_range,
                                        }),
                                    ("string" ===
                                        typeof input.vulnerable_template &&
                                        RegExp(/^prefix_(.*)/).test(
                                            input.vulnerable_template,
                                        ) &&
                                        ($is_custom(
                                            "default",
                                            "string",
                                            "two",
                                            input.vulnerable_template,
                                        ) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".vulnerable_template",
                                                expected:
                                                    "string (@default two)",
                                                value: input.vulnerable_template,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + ".vulnerable_template",
                                            expected: "`prefix_${string}`",
                                            value: input.vulnerable_template,
                                        }),
                                    (null !==
                                        input.boolean_and_number_and_template ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".boolean_and_number_and_template",
                                            expected:
                                                "(`prefix_${string}` | boolean | number)",
                                            value: input.boolean_and_number_and_template,
                                        })) &&
                                        (undefined !==
                                            input.boolean_and_number_and_template ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".boolean_and_number_and_template",
                                                expected:
                                                    "(`prefix_${string}` | boolean | number)",
                                                value: input.boolean_and_number_and_template,
                                            })) &&
                                        (("number" ===
                                            typeof input.boolean_and_number_and_template &&
                                            Number.isFinite(
                                                input.boolean_and_number_and_template,
                                            ) &&
                                            ($is_custom(
                                                "default",
                                                "number",
                                                "false",
                                                input.boolean_and_number_and_template,
                                            ) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".boolean_and_number_and_template",
                                                    expected:
                                                        "number (@default false)",
                                                    value: input.boolean_and_number_and_template,
                                                })) &&
                                            ($is_custom(
                                                "default",
                                                "number",
                                                "1",
                                                input.boolean_and_number_and_template,
                                            ) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".boolean_and_number_and_template",
                                                    expected:
                                                        "number (@default 1)",
                                                    value: input.boolean_and_number_and_template,
                                                })) &&
                                            ($is_custom(
                                                "default",
                                                "number",
                                                "prefix_B",
                                                input.boolean_and_number_and_template,
                                            ) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".boolean_and_number_and_template",
                                                    expected:
                                                        "number (@default prefix_B)",
                                                    value: input.boolean_and_number_and_template,
                                                }))) ||
                                            "boolean" ===
                                                typeof input.boolean_and_number_and_template ||
                                            ("string" ===
                                                typeof input.boolean_and_number_and_template &&
                                                RegExp(/^prefix_(.*)/).test(
                                                    input.boolean_and_number_and_template,
                                                ) &&
                                                ($is_custom(
                                                    "default",
                                                    "string",
                                                    "false",
                                                    input.boolean_and_number_and_template,
                                                ) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".boolean_and_number_and_template",
                                                        expected:
                                                            "string (@default false)",
                                                        value: input.boolean_and_number_and_template,
                                                    })) &&
                                                ($is_custom(
                                                    "default",
                                                    "string",
                                                    "1",
                                                    input.boolean_and_number_and_template,
                                                ) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".boolean_and_number_and_template",
                                                        expected:
                                                            "string (@default 1)",
                                                        value: input.boolean_and_number_and_template,
                                                    })) &&
                                                ($is_custom(
                                                    "default",
                                                    "string",
                                                    "prefix_B",
                                                    input.boolean_and_number_and_template,
                                                ) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".boolean_and_number_and_template",
                                                        expected:
                                                            "string (@default prefix_B)",
                                                        value: input.boolean_and_number_and_template,
                                                    }))) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".boolean_and_number_and_template",
                                                expected:
                                                    "(`prefix_${string}` | boolean | number)",
                                                value: input.boolean_and_number_and_template,
                                            })),
                                ].every((flag: boolean) => flag);
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "TagDefault",
                                        value: input,
                                    })) &&
                                    $vo0(input, _path + "", true)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "TagDefault",
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
                const decode = (input: Uint8Array): TagDefault => {
                    const $Reader = (typia.protobuf.validateDecode as any)
                        .Reader;
                    const $pdo0 = (reader: any, length: number = -1): any => {
                        length =
                            length < 0
                                ? reader.size()
                                : reader.index() + length;
                        const output = {
                            boolean: undefined as any,
                            number: undefined as any,
                            string: "" as any,
                            text: "" as any,
                            template: undefined as any,
                            boolean_and_number_and_string: "" as any,
                            union_but_boolean: "" as any,
                            union_but_number: "" as any,
                            union_but_string: "" as any,
                            vulnerable_range: undefined as any,
                            vulnerable_template: undefined as any,
                            boolean_and_number_and_template: undefined as any,
                        };
                        while (reader.index() < length) {
                            const tag = reader.uint32();
                            switch (tag >>> 3) {
                                case 1:
                                    output.boolean = reader.bool();
                                    break;
                                case 2:
                                    output.number = reader.double();
                                    break;
                                case 3:
                                    output.string = reader.string();
                                    break;
                                case 4:
                                    output.text = reader.string();
                                    break;
                                case 5:
                                    output.template = reader.string();
                                    break;
                                case 6:
                                    output.boolean_and_number_and_string =
                                        reader.bool();
                                    break;
                                case 7:
                                    output.boolean_and_number_and_string =
                                        reader.double();
                                    break;
                                case 8:
                                    output.boolean_and_number_and_string =
                                        reader.string();
                                    break;
                                case 9:
                                    output.union_but_boolean = reader.bool();
                                    break;
                                case 10:
                                    output.union_but_boolean = reader.double();
                                    break;
                                case 11:
                                    output.union_but_boolean = reader.string();
                                    break;
                                case 12:
                                    output.union_but_number = reader.bool();
                                    break;
                                case 13:
                                    output.union_but_number = reader.double();
                                    break;
                                case 14:
                                    output.union_but_number = reader.string();
                                    break;
                                case 15:
                                    output.union_but_string = reader.bool();
                                    break;
                                case 16:
                                    output.union_but_string = reader.double();
                                    break;
                                case 17:
                                    output.union_but_string = reader.string();
                                    break;
                                case 18:
                                    output.vulnerable_range = reader.double();
                                    break;
                                case 19:
                                    output.vulnerable_template =
                                        reader.string();
                                    break;
                                case 20:
                                    output.boolean_and_number_and_template =
                                        reader.bool();
                                    break;
                                case 21:
                                    output.boolean_and_number_and_template =
                                        reader.double();
                                    break;
                                case 22:
                                    output.boolean_and_number_and_template =
                                        reader.string();
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
            })(input),
        encode: (input: TagDefault): Uint8Array => {
            const $throws = (typia.protobuf.createEncode as any).throws;
            const $is_custom = (typia.protobuf.createEncode as any).is_custom;
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "boolean";
                    writer.uint32(8);
                    writer.bool(input.boolean);
                    // property "number";
                    writer.uint32(17);
                    writer.double(input.number);
                    // property "string";
                    writer.uint32(26);
                    writer.string(input.string);
                    // property "text";
                    writer.uint32(34);
                    writer.string(input.text);
                    // property "template";
                    writer.uint32(42);
                    writer.string(input.template);
                    // property "boolean_and_number_and_string";
                    if (
                        "boolean" === typeof input.boolean_and_number_and_string
                    ) {
                        writer.uint32(48);
                        writer.bool(input.boolean_and_number_and_string);
                    } else if (
                        "number" === typeof input.boolean_and_number_and_string
                    ) {
                        writer.uint32(57);
                        writer.double(input.boolean_and_number_and_string);
                    } else if (
                        "string" === typeof input.boolean_and_number_and_string
                    ) {
                        writer.uint32(66);
                        writer.string(input.boolean_and_number_and_string);
                    } else
                        $throws({
                            expected: "(boolean | number | string)",
                            value: input.boolean_and_number_and_string,
                        });
                    // property "union_but_boolean";
                    if ("boolean" === typeof input.union_but_boolean) {
                        writer.uint32(72);
                        writer.bool(input.union_but_boolean);
                    } else if ("number" === typeof input.union_but_boolean) {
                        writer.uint32(81);
                        writer.double(input.union_but_boolean);
                    } else if ("string" === typeof input.union_but_boolean) {
                        writer.uint32(90);
                        writer.string(input.union_but_boolean);
                    } else
                        $throws({
                            expected: "(boolean | number | string)",
                            value: input.union_but_boolean,
                        });
                    // property "union_but_number";
                    if ("boolean" === typeof input.union_but_number) {
                        writer.uint32(96);
                        writer.bool(input.union_but_number);
                    } else if ("number" === typeof input.union_but_number) {
                        writer.uint32(105);
                        writer.double(input.union_but_number);
                    } else if ("string" === typeof input.union_but_number) {
                        writer.uint32(114);
                        writer.string(input.union_but_number);
                    } else
                        $throws({
                            expected: "(boolean | number | string)",
                            value: input.union_but_number,
                        });
                    // property "union_but_string";
                    if ("boolean" === typeof input.union_but_string) {
                        writer.uint32(120);
                        writer.bool(input.union_but_string);
                    } else if ("number" === typeof input.union_but_string) {
                        writer.uint32(129);
                        writer.double(input.union_but_string);
                    } else if ("string" === typeof input.union_but_string) {
                        writer.uint32(138);
                        writer.string(input.union_but_string);
                    } else
                        $throws({
                            expected: "(boolean | number | string)",
                            value: input.union_but_string,
                        });
                    // property "vulnerable_range";
                    writer.uint32(145);
                    writer.double(input.vulnerable_range);
                    // property "vulnerable_template";
                    writer.uint32(154);
                    writer.string(input.vulnerable_template);
                    // property "boolean_and_number_and_template";
                    if (
                        "boolean" ===
                        typeof input.boolean_and_number_and_template
                    ) {
                        writer.uint32(160);
                        writer.bool(input.boolean_and_number_and_template);
                    } else if (
                        "number" ===
                        typeof input.boolean_and_number_and_template
                    ) {
                        writer.uint32(169);
                        writer.double(input.boolean_and_number_and_template);
                    } else if (
                        "string" ===
                        typeof input.boolean_and_number_and_template
                    ) {
                        writer.uint32(178);
                        writer.string(input.boolean_and_number_and_template);
                    } else
                        $throws({
                            expected: "(`prefix_${string}` | boolean | number)",
                            value: input.boolean_and_number_and_template,
                        });
                };
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
