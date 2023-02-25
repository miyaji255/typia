import typia from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_assertPrune } from "../internal/_test_assertPrune";
export const test_createAssertPrune_ObjectNullable = _test_assertPrune("ObjectNullable", ObjectNullable.generate, (input: any): ObjectNullable => { const assert = (input: any) => {
    const $guard = (typia.createAssertPrune as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectNullable => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && (("object" === typeof input.manufacturer && null !== input.manufacturer || $guard(_exceptionable, {
            path: _path + ".manufacturer",
            expected: "Resolve<ObjectNullable.IManufacturer>",
            value: input.manufacturer
        })) && $ao1(input.manufacturer, _path + ".manufacturer", true && _exceptionable)) && (("object" === typeof input.brand && null !== input.brand || $guard(_exceptionable, {
            path: _path + ".brand",
            expected: "Resolve<ObjectNullable.IBrand>",
            value: input.brand
        })) && $ao2(input.brand, _path + ".brand", true && _exceptionable)) && (("object" === typeof input.similar && null !== input.similar || $guard(_exceptionable, {
            path: _path + ".similar",
            expected: "(Resolve<ObjectNullable.IBrand> | Resolve<ObjectNullable.IManufacturer>)",
            value: input.similar
        })) && $au0(input.similar, _path + ".similar", true && _exceptionable));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("manufacturer" === input.type || $guard(_exceptionable, {
            path: _path + ".type",
            expected: "\"manufacturer\"",
            value: input.type
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        }));
        const $ao2 = (input: any, _path: string, _exceptionable: boolean) => ("brand" === input.type || $guard(_exceptionable, {
            path: _path + ".type",
            expected: "\"brand\"",
            value: input.type
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        }));
        const $au0 = (input: any, _path: string, _exceptionable: boolean) => (() => {
            if ("manufacturer" === input.type)
                return $ao1(input, _path, true && _exceptionable);
            if ("brand" === input.type)
                return $ao2(input, _path, true && _exceptionable);
            return $guard(_exceptionable, {
                path: _path,
                expected: "(ObjectNullable.IManufacturer | ObjectNullable.IBrand)",
                value: input
            });
        })();
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "[Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>]",
            value: input
        })) && ((input.length === 3 || $guard(true, {
            path: _path + "",
            expected: "[Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>]",
            value: input
        })) && (("object" === typeof input[0] && null !== input[0] || $guard(true, {
            path: _path + "[0]",
            expected: "Resolve<ObjectNullable.IProduct>",
            value: input[0]
        })) && $ao0(input[0], _path + "[0]", true)) && (("object" === typeof input[1] && null !== input[1] || $guard(true, {
            path: _path + "[1]",
            expected: "Resolve<ObjectNullable.IProduct>",
            value: input[1]
        })) && $ao0(input[1], _path + "[1]", true)) && (("object" === typeof input[2] && null !== input[2] || $guard(true, {
            path: _path + "[2]",
            expected: "Resolve<ObjectNullable.IProduct>",
            value: input[2]
        })) && $ao0(input[2], _path + "[2]", true)));
    })(input, "$input", true);
    return input as ObjectNullable;
}; const prune = (input: ObjectNullable): void => {
    const $throws = (typia.createAssertPrune as any).throws;
    const $io0 = (input: any) => "string" === typeof input.name && ("object" === typeof input.manufacturer && null !== input.manufacturer && $io1(input.manufacturer)) && ("object" === typeof input.brand && null !== input.brand && $io2(input.brand)) && ("object" === typeof input.similar && null !== input.similar && $iu0(input.similar));
    const $io1 = (input: any) => "manufacturer" === input.type && "string" === typeof input.name;
    const $io2 = (input: any) => "brand" === input.type && "string" === typeof input.name;
    const $iu0 = (input: any) => (() => {
        if ("manufacturer" === input.type)
            return $io1(input);
        if ("brand" === input.type)
            return $io2(input);
        return false;
    })();
    const $po0 = (input: any) => {
        if ("object" === typeof input.manufacturer && null !== input.manufacturer)
            $po1(input.manufacturer);
        if ("object" === typeof input.brand && null !== input.brand)
            $po2(input.brand);
        if ("object" === typeof input.similar && null !== input.similar)
            $pu0(input.similar);
        for (const key of Object.keys(input)) {
            if ("name" === key || "manufacturer" === key || "brand" === key || "similar" === key)
                continue;
            delete input[key];
        }
    };
    const $po1 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("type" === key || "name" === key)
                continue;
            delete input[key];
        }
    };
    const $po2 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("type" === key || "name" === key)
                continue;
            delete input[key];
        }
    };
    const $pu0 = (input: any) => (() => {
        if ("manufacturer" === input.type)
            return $po1(input);
        if ("brand" === input.type)
            return $po2(input);
        $throws({
            expected: "(ObjectNullable.IManufacturer | ObjectNullable.IBrand)",
            value: input
        });
    })();
    if (Array.isArray(input) && (input.length === 3 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io0(input[1])) && ("object" === typeof input[2] && null !== input[2] && $io0(input[2])))) {
        if ("object" === typeof input[0] && null !== input[0])
            $po0(input[0]);
        if ("object" === typeof input[1] && null !== input[1])
            $po0(input[1]);
        if ("object" === typeof input[2] && null !== input[2])
            $po0(input[2]);
    }
}; assert(input); prune(input); return input; }, ObjectNullable.SPOILERS);
