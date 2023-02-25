import typia from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_equals } from "../internal/_test_equals";
export const test_createEquals_ObjectUnionImplicit = _test_equals("ObjectUnionImplicit", ObjectUnionImplicit.generate, (input: any, _exceptionable: boolean): input is ObjectUnionImplicit => {
    const $io0 = (input: any, _exceptionable: boolean) => "number" === typeof input.x && "number" === typeof input.y && (undefined === input.slope || "number" === typeof input.slope) && (2 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["x", "y", "slope"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io1 = (input: any, _exceptionable: boolean) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1, true && _exceptionable) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2, true && _exceptionable)) && (undefined === input.width || "number" === typeof input.width) && (undefined === input.distance || "number" === typeof input.distance) && (2 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["p1", "p2", "width", "distance"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io2 = (input: any, _exceptionable: boolean) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1, true && _exceptionable) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2, true && _exceptionable)) && ("object" === typeof input.p3 && null !== input.p3 && $io0(input.p3, true && _exceptionable)) && (undefined === input.width || "number" === typeof input.width) && (undefined === input.height || "number" === typeof input.height) && (undefined === input.area || "number" === typeof input.area) && (3 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["p1", "p2", "p3", "width", "height", "area"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io3 = (input: any, _exceptionable: boolean) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1, true && _exceptionable) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2, true && _exceptionable)) && ("object" === typeof input.p3 && null !== input.p3 && $io0(input.p3, true && _exceptionable)) && ("object" === typeof input.p4 && null !== input.p4 && $io0(input.p4, true && _exceptionable)) && (undefined === input.width || "number" === typeof input.width) && (undefined === input.height || "number" === typeof input.height) && (undefined === input.area || "number" === typeof input.area) && (4 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["p1", "p2", "p3", "p4", "width", "height", "area"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io4 = (input: any, _exceptionable: boolean) => Array.isArray(input.points) && input.points.every((elem: any, _index2: number) => "object" === typeof elem && null !== elem && $io0(elem, true && _exceptionable)) && (undefined === input.length || "number" === typeof input.length) && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["points", "length"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io5 = (input: any, _exceptionable: boolean) => "object" === typeof input.outer && null !== input.outer && $io4(input.outer, true && _exceptionable) && (undefined === input.inner || Array.isArray(input.inner) && input.inner.every((elem: any, _index3: number) => "object" === typeof elem && null !== elem && $io4(elem, true && _exceptionable))) && (undefined === input.area || "number" === typeof input.area) && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["outer", "inner", "area"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io6 = (input: any, _exceptionable: boolean) => (undefined === input.centroid || "object" === typeof input.centroid && null !== input.centroid && $io0(input.centroid, true && _exceptionable)) && "number" === typeof input.radius && (undefined === input.area || "number" === typeof input.area) && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["centroid", "radius", "area"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $iu0 = (input: any, _exceptionable: boolean) => (() => {
        if (undefined !== input.x)
            return $io0(input, true && _exceptionable);
        if (undefined !== input.p4)
            return $io3(input, true && _exceptionable);
        if (undefined !== input.points)
            return $io4(input, true && _exceptionable);
        if (undefined !== input.outer)
            return $io5(input, true && _exceptionable);
        if (undefined !== input.radius)
            return $io6(input, true && _exceptionable);
        return (() => {
            if (undefined !== input.p3)
                return $io2(input, true && _exceptionable);
            return $io1(input, true && _exceptionable);
        })();
    })();
    return Array.isArray(input) && input.every((elem: any, _index1: number) => "object" === typeof elem && null !== elem && $iu0(elem, true));
});
