import TSON from "../../../../src";
import { TagFormat } from "../../../structures/TagFormat";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_tag_format = _test_application_ajv(
    "format tag",
    TSON.application<[TagFormat], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/TagFormat",
            },
        ],
        components: {
            schemas: {
                TagFormat: {
                    $id: "components#/schemas/TagFormat",
                    type: "object",
                    properties: {
                        uuid: {
                            type: "string",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "format",
                                    value: "uuid",
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "uuid",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            format: "uuid",
                        },
                        email: {
                            type: "string",
                            nullable: false,
                            description: "Email address",
                            "x-tson-metaTags": [
                                {
                                    kind: "format",
                                    value: "email",
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "email",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            format: "email",
                        },
                        url: {
                            type: "string",
                            nullable: false,
                            description: "URL address.",
                            "x-tson-metaTags": [
                                {
                                    kind: "format",
                                    value: "url",
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "url",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            format: "url",
                        },
                        ipv4: {
                            type: "string",
                            nullable: false,
                            description: "IPv4 address.",
                            "x-tson-metaTags": [
                                {
                                    kind: "format",
                                    value: "ipv4",
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "ipv4",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            format: "ipv4",
                        },
                        ipv6: {
                            type: "string",
                            nullable: false,
                            description: "IPv6 address.",
                            "x-tson-metaTags": [
                                {
                                    kind: "format",
                                    value: "ipv6",
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "ipv6",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            format: "ipv6",
                        },
                        custom: {
                            type: "string",
                            nullable: false,
                            description: "A custom format string.",
                            "x-tson-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "my-custom-format",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            format: "my-custom-format",
                        },
                    },
                    nullable: false,
                    required: [
                        "uuid",
                        "email",
                        "url",
                        "ipv4",
                        "ipv6",
                        "custom",
                    ],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);