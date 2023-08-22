import typia from "../../../../src";
import { _test_protobuf_isDecode } from "../../../internal/_test_protobuf_isDecode";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_protobuf_isDecode_ObjectUnionCompositePointer =
    _test_protobuf_isDecode(
        "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
        isDecode: (input: Uint8Array): ObjectUnionCompositePointer | null => {
            const is = (input: any): input is ObjectUnionCompositePointer => {
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.value) &&
                    input.value.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    );
                const $io1 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $iu0(input.value);
                const $io2 = (input: any): boolean =>
                    "number" === typeof input.x &&
                    Number.isFinite(input.x) &&
                    "number" === typeof input.y &&
                    Number.isFinite(input.y);
                const $io3 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    "number" === typeof (input.p1 as any).x &&
                    Number.isFinite((input.p1 as any).x) &&
                    "number" === typeof (input.p1 as any).y &&
                    Number.isFinite((input.p1 as any).y) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    "number" === typeof (input.p2 as any).x &&
                    Number.isFinite((input.p2 as any).x) &&
                    "number" === typeof (input.p2 as any).y &&
                    Number.isFinite((input.p2 as any).y);
                const $io4 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    "number" === typeof (input.p1 as any).x &&
                    Number.isFinite((input.p1 as any).x) &&
                    "number" === typeof (input.p1 as any).y &&
                    Number.isFinite((input.p1 as any).y) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    "number" === typeof (input.p2 as any).x &&
                    Number.isFinite((input.p2 as any).x) &&
                    "number" === typeof (input.p2 as any).y &&
                    Number.isFinite((input.p2 as any).y) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    "number" === typeof (input.p3 as any).x &&
                    Number.isFinite((input.p3 as any).x) &&
                    "number" === typeof (input.p3 as any).y &&
                    Number.isFinite((input.p3 as any).y);
                const $io5 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    "number" === typeof (input.p1 as any).x &&
                    Number.isFinite((input.p1 as any).x) &&
                    "number" === typeof (input.p1 as any).y &&
                    Number.isFinite((input.p1 as any).y) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    "number" === typeof (input.p2 as any).x &&
                    Number.isFinite((input.p2 as any).x) &&
                    "number" === typeof (input.p2 as any).y &&
                    Number.isFinite((input.p2 as any).y) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    "number" === typeof (input.p3 as any).x &&
                    Number.isFinite((input.p3 as any).x) &&
                    "number" === typeof (input.p3 as any).y &&
                    Number.isFinite((input.p3 as any).y) &&
                    "object" === typeof input.p4 &&
                    null !== input.p4 &&
                    "number" === typeof (input.p4 as any).x &&
                    Number.isFinite((input.p4 as any).x) &&
                    "number" === typeof (input.p4 as any).y &&
                    Number.isFinite((input.p4 as any).y);
                const $io6 = (input: any): boolean =>
                    Array.isArray(input.points) &&
                    input.points.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    );
                const $io7 = (input: any): boolean =>
                    "object" === typeof input.outer &&
                    null !== input.outer &&
                    $io6(input.outer) &&
                    Array.isArray(input.inner) &&
                    input.inner.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io6(elem),
                    );
                const $io8 = (input: any): boolean =>
                    Array.isArray(input.outer) &&
                    input.outer.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    ) &&
                    "object" === typeof input.inner &&
                    null !== input.inner &&
                    "number" === typeof (input.inner as any).x &&
                    Number.isFinite((input.inner as any).x) &&
                    "number" === typeof (input.inner as any).y &&
                    Number.isFinite((input.inner as any).y);
                const $io9 = (input: any): boolean =>
                    "object" === typeof input.centroid &&
                    null !== input.centroid &&
                    "number" === typeof (input.centroid as any).x &&
                    Number.isFinite((input.centroid as any).x) &&
                    "number" === typeof (input.centroid as any).y &&
                    Number.isFinite((input.centroid as any).y) &&
                    "number" === typeof input.radius &&
                    Number.isFinite(input.radius);
                const $iu0 = (input: any): any =>
                    (() => {
                        if (undefined !== input.x) return $io2(input);
                        else if (undefined !== input.p4) return $io5(input);
                        else if (undefined !== input.points) return $io6(input);
                        else if (
                            Array.isArray(input.outer) &&
                            input.outer.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            )
                        )
                            return $io8(input);
                        else if (
                            "object" === typeof input.outer &&
                            null !== input.outer &&
                            $io6(input.outer)
                        )
                            return $io7(input);
                        else if (undefined !== input.centroid)
                            return $io9(input);
                        else
                            return (() => {
                                if (undefined !== input.p3) return $io4(input);
                                else return $io3(input);
                            })();
                    })();
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const decode = (input: Uint8Array): ObjectUnionCompositePointer => {
                const $Reader = (typia.protobuf.createIsDecode as any).Reader;
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
                        value: undefined as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.value = $pdo2(reader, reader.uint32());
                                break;
                            case 2:
                                output.value = $pdo3(reader, reader.uint32());
                                break;
                            case 3:
                                output.value = $pdo4(reader, reader.uint32());
                                break;
                            case 4:
                                output.value = $pdo5(reader, reader.uint32());
                                break;
                            case 5:
                                output.value = $pdo6(reader, reader.uint32());
                                break;
                            case 6:
                                output.value = $pdo8(reader, reader.uint32());
                                break;
                            case 7:
                                output.value = $pdo7(reader, reader.uint32());
                                break;
                            case 8:
                                output.value = $pdo9(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const $pdo2 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        x: undefined as any,
                        y: undefined as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.x = reader.double();
                                break;
                            case 2:
                                output.y = reader.double();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const $pdo3 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        p1: undefined as any,
                        p2: undefined as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.p1 = $pdo2(reader, reader.uint32());
                                break;
                            case 2:
                                output.p2 = $pdo2(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const $pdo4 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        p1: undefined as any,
                        p2: undefined as any,
                        p3: undefined as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.p1 = $pdo2(reader, reader.uint32());
                                break;
                            case 2:
                                output.p2 = $pdo2(reader, reader.uint32());
                                break;
                            case 3:
                                output.p3 = $pdo2(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const $pdo5 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        p1: undefined as any,
                        p2: undefined as any,
                        p3: undefined as any,
                        p4: undefined as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.p1 = $pdo2(reader, reader.uint32());
                                break;
                            case 2:
                                output.p2 = $pdo2(reader, reader.uint32());
                                break;
                            case 3:
                                output.p3 = $pdo2(reader, reader.uint32());
                                break;
                            case 4:
                                output.p4 = $pdo2(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const $pdo6 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        points: [] as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.points.push(
                                    $pdo2(reader, reader.uint32()),
                                );
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const $pdo7 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        outer: undefined as any,
                        inner: [] as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.outer = $pdo6(reader, reader.uint32());
                                break;
                            case 2:
                                output.inner.push(
                                    $pdo6(reader, reader.uint32()),
                                );
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const $pdo8 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        outer: [] as any,
                        inner: undefined as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.outer.push(
                                    $pdo2(reader, reader.uint32()),
                                );
                                break;
                            case 2:
                                output.inner = $pdo2(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const $pdo9 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        centroid: undefined as any,
                        radius: undefined as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.centroid = $pdo2(
                                    reader,
                                    reader.uint32(),
                                );
                                break;
                            case 2:
                                output.radius = reader.double();
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
            if (!is(input)) return null;
            const output = decode(input);
            return output;
        },
        encode: (input: ObjectUnionCompositePointer): Uint8Array => {
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
                    // property "value";
                    if (undefined !== input.value.x)
                        return (() => {
                            writer.uint32(10);
                            writer.fork();
                            $peo2(input.value);
                            writer.ldelim();
                        })();
                    else if (undefined !== input.value.p4)
                        return (() => {
                            writer.uint32(10);
                            writer.fork();
                            $peo5(input.value);
                            writer.ldelim();
                        })();
                    else if (undefined !== input.value.points)
                        return (() => {
                            writer.uint32(10);
                            writer.fork();
                            $peo6(input.value);
                            writer.ldelim();
                        })();
                    else if (
                        Array.isArray(input.value.outer) &&
                        input.value.outer.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        )
                    )
                        return (() => {
                            writer.uint32(10);
                            writer.fork();
                            $peo8(input.value);
                            writer.ldelim();
                        })();
                    else if (
                        "object" === typeof input.value.outer &&
                        null !== input.value.outer &&
                        $io6(input.value.outer)
                    )
                        return (() => {
                            writer.uint32(10);
                            writer.fork();
                            $peo7(input.value);
                            writer.ldelim();
                        })();
                    else if (undefined !== input.value.centroid)
                        return (() => {
                            writer.uint32(10);
                            writer.fork();
                            $peo9(input.value);
                            writer.ldelim();
                        })();
                    else
                        return (() => {
                            if (undefined !== input.value.p3)
                                return (() => {
                                    writer.uint32(10);
                                    writer.fork();
                                    $peo4(input.value);
                                    writer.ldelim();
                                })();
                            else
                                return (() => {
                                    writer.uint32(10);
                                    writer.fork();
                                    $peo3(input.value);
                                    writer.ldelim();
                                })();
                        })();
                };
                const $peo2 = (input: any): any => {
                    // property "x";
                    writer.uint32(9);
                    writer.double(input.x);
                    // property "y";
                    writer.uint32(17);
                    writer.double(input.y);
                };
                const $peo3 = (input: any): any => {
                    // property "p1";
                    writer.uint32(10);
                    writer.fork();
                    $peo2(input.p1);
                    writer.ldelim();
                    // property "p2";
                    writer.uint32(18);
                    writer.fork();
                    $peo2(input.p2);
                    writer.ldelim();
                };
                const $peo4 = (input: any): any => {
                    // property "p1";
                    writer.uint32(10);
                    writer.fork();
                    $peo2(input.p1);
                    writer.ldelim();
                    // property "p2";
                    writer.uint32(18);
                    writer.fork();
                    $peo2(input.p2);
                    writer.ldelim();
                    // property "p3";
                    writer.uint32(26);
                    writer.fork();
                    $peo2(input.p3);
                    writer.ldelim();
                };
                const $peo5 = (input: any): any => {
                    // property "p1";
                    writer.uint32(10);
                    writer.fork();
                    $peo2(input.p1);
                    writer.ldelim();
                    // property "p2";
                    writer.uint32(18);
                    writer.fork();
                    $peo2(input.p2);
                    writer.ldelim();
                    // property "p3";
                    writer.uint32(26);
                    writer.fork();
                    $peo2(input.p3);
                    writer.ldelim();
                    // property "p4";
                    writer.uint32(34);
                    writer.fork();
                    $peo2(input.p4);
                    writer.ldelim();
                };
                const $peo6 = (input: any): any => {
                    // property "points";
                    if (0 !== input.points.length) {
                        for (const elem of input.points) {
                            writer.uint32(10);
                            writer.fork();
                            $peo2(elem);
                            writer.ldelim();
                        }
                    }
                };
                const $peo7 = (input: any): any => {
                    // property "outer";
                    writer.uint32(10);
                    writer.fork();
                    $peo6(input.outer);
                    writer.ldelim();
                    // property "inner";
                    if (0 !== input.inner.length) {
                        for (const elem of input.inner) {
                            writer.uint32(18);
                            writer.fork();
                            $peo6(elem);
                            writer.ldelim();
                        }
                    }
                };
                const $peo8 = (input: any): any => {
                    // property "outer";
                    if (0 !== input.outer.length) {
                        for (const elem of input.outer) {
                            writer.uint32(10);
                            writer.fork();
                            $peo2(elem);
                            writer.ldelim();
                        }
                    }
                    // property "inner";
                    writer.uint32(18);
                    writer.fork();
                    $peo2(input.inner);
                    writer.ldelim();
                };
                const $peo9 = (input: any): any => {
                    // property "centroid";
                    writer.uint32(10);
                    writer.fork();
                    $peo2(input.centroid);
                    writer.ldelim();
                    // property "radius";
                    writer.uint32(17);
                    writer.double(input.radius);
                };
                const $io1 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $iu0(input.value);
                const $io2 = (input: any): boolean =>
                    "number" === typeof input.x && "number" === typeof input.y;
                const $io3 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io2(input.p1) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io2(input.p2);
                const $io4 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io2(input.p1) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io2(input.p2) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    $io2(input.p3);
                const $io5 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io2(input.p1) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io2(input.p2) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    $io2(input.p3) &&
                    "object" === typeof input.p4 &&
                    null !== input.p4 &&
                    $io2(input.p4);
                const $io6 = (input: any): boolean =>
                    Array.isArray(input.points) &&
                    input.points.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    );
                const $io7 = (input: any): boolean =>
                    "object" === typeof input.outer &&
                    null !== input.outer &&
                    $io6(input.outer) &&
                    Array.isArray(input.inner) &&
                    input.inner.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io6(elem),
                    );
                const $io8 = (input: any): boolean =>
                    Array.isArray(input.outer) &&
                    input.outer.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    ) &&
                    "object" === typeof input.inner &&
                    null !== input.inner &&
                    $io2(input.inner);
                const $io9 = (input: any): boolean =>
                    "object" === typeof input.centroid &&
                    null !== input.centroid &&
                    $io2(input.centroid) &&
                    "number" === typeof input.radius;
                const $iu0 = (input: any): any =>
                    (() => {
                        if (undefined !== input.x) return $io2(input);
                        else if (undefined !== input.p4) return $io5(input);
                        else if (undefined !== input.points) return $io6(input);
                        else if (
                            Array.isArray(input.outer) &&
                            input.outer.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            )
                        )
                            return $io8(input);
                        else if (
                            "object" === typeof input.outer &&
                            null !== input.outer &&
                            $io6(input.outer)
                        )
                            return $io7(input);
                        else if (undefined !== input.centroid)
                            return $io9(input);
                        else
                            return (() => {
                                if (undefined !== input.p3) return $io4(input);
                                else return $io3(input);
                            })();
                    })();
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
