import typia from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_ObjectUnionComposite = _test_stringify("ObjectUnionComposite", ObjectUnionComposite.generate, (input) => ((input: ObjectUnionComposite): string => {
    const $number = (typia.stringify as any).number;
    const $io0 = (input: any) => "number" === typeof input.x && "number" === typeof input.y;
    const $io1 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2));
    const $io2 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io0(input.p3));
    const $io3 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io0(input.p3)) && ("object" === typeof input.p4 && null !== input.p4 && $io0(input.p4));
    const $io4 = (input: any) => Array.isArray(input.points) && input.points.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
    const $io5 = (input: any) => "object" === typeof input.outer && null !== input.outer && $io4(input.outer) && (Array.isArray(input.inner) && input.inner.every((elem: any) => "object" === typeof elem && null !== elem && $io4(elem)));
    const $io6 = (input: any) => Array.isArray(input.outer) && input.outer.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && ("object" === typeof input.inner && null !== input.inner && $io0(input.inner));
    const $io7 = (input: any) => "object" === typeof input.centroid && null !== input.centroid && $io0(input.centroid) && "number" === typeof input.radius;
    const $iu0 = (input: any) => (() => {
        if (undefined !== input.x)
            return $io0(input);
        if (undefined !== input.p4)
            return $io3(input);
        if (undefined !== input.points)
            return $io4(input);
        if ("object" === typeof input.outer && null !== input.outer && $io4(input.outer))
            return $io5(input);
        if (Array.isArray(input.outer) && input.outer.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)))
            return $io6(input);
        if (undefined !== input.centroid)
            return $io7(input);
        return (() => {
            if (undefined !== input.p3)
                return $io2(input);
            return $io1(input);
        })();
    })();
    const $so0 = (input: any) => `{"x":${$number(input.x)},"y":${$number(input.y)}}`;
    const $so1 = (input: any) => `{"p1":${`{"x":${$number(input.p1.x)},"y":${$number(input.p1.y)}}`},"p2":${`{"x":${$number(input.p2.x)},"y":${$number(input.p2.y)}}`}}`;
    const $so2 = (input: any) => `{"p1":${`{"x":${$number(input.p1.x)},"y":${$number(input.p1.y)}}`},"p2":${`{"x":${$number(input.p2.x)},"y":${$number(input.p2.y)}}`},"p3":${`{"x":${$number(input.p3.x)},"y":${$number(input.p3.y)}}`}}`;
    const $so3 = (input: any) => `{"p1":${`{"x":${$number(input.p1.x)},"y":${$number(input.p1.y)}}`},"p2":${`{"x":${$number(input.p2.x)},"y":${$number(input.p2.y)}}`},"p3":${`{"x":${$number(input.p3.x)},"y":${$number(input.p3.y)}}`},"p4":${`{"x":${$number(input.p4.x)},"y":${$number(input.p4.y)}}`}}`;
    const $so4 = (input: any) => `{"points":${`[${input.points.map((elem: any) => `{"x":${$number(elem.x)},"y":${$number(elem.y)}}`).join(",")}]`}}`;
    const $so5 = (input: any) => `{"outer":${$so4(input.outer)},"inner":${`[${input.inner.map((elem: any) => $so4(elem)).join(",")}]`}}`;
    const $so6 = (input: any) => `{"outer":${`[${input.outer.map((elem: any) => `{"x":${$number(elem.x)},"y":${$number(elem.y)}}`).join(",")}]`},"inner":${`{"x":${$number(input.inner.x)},"y":${$number(input.inner.y)}}`}}`;
    const $so7 = (input: any) => `{"centroid":${`{"x":${$number(input.centroid.x)},"y":${$number(input.centroid.y)}}`},"radius":${$number(input.radius)}}`;
    const $su0 = (input: any) => (() => {
        if (undefined !== input.x)
            return $so0(input);
        if (undefined !== input.p4)
            return $so3(input);
        if (undefined !== input.points)
            return $so4(input);
        if ("object" === typeof input.outer && null !== input.outer && $io4(input.outer))
            return $so5(input);
        if (Array.isArray(input.outer) && input.outer.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)))
            return $so6(input);
        if (undefined !== input.centroid)
            return $so7(input);
        return (() => {
            if (undefined !== input.p3)
                return $so2(input);
            return $so1(input);
        })();
    })();
    return `[${input.map((elem: any) => $su0(elem)).join(",")}]`;
})(input));
