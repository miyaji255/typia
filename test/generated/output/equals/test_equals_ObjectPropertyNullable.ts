import typia from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_equals } from "../internal/_test_equals";
export const test_equals_ObjectPropertyNullable = _test_equals("ObjectPropertyNullable", ObjectPropertyNullable.generate, (input) => ((input: any, _exceptionable: boolean): input is ObjectPropertyNullable => {
    const $io0 = (input: any, _exceptionable: boolean) => "boolean" === typeof input.value && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["value"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io1 = (input: any, _exceptionable: boolean) => "number" === typeof input.value && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["value"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io2 = (input: any, _exceptionable: boolean) => "string" === typeof input.value && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["value"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io3 = (input: any, _exceptionable: boolean) => "object" === typeof input.value && null !== input.value && $io4(input.value, true && _exceptionable) && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["value"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io4 = (input: any, _exceptionable: boolean) => "string" === typeof input.id && "string" === typeof input.name && (undefined === input.grade || "number" === typeof input.grade) && (undefined === input.serial || "number" === typeof input.serial) && "boolean" === typeof input.activated && (3 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["id", "name", "grade", "serial", "activated"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return Array.isArray(input) && (input.length === 4 && (Array.isArray(input[0]) && input[0].every((elem: any, _index1: number) => "object" === typeof elem && null !== elem && $io0(elem, true))) && (Array.isArray(input[1]) && input[1].every((elem: any, _index2: number) => "object" === typeof elem && null !== elem && $io1(elem, true))) && (Array.isArray(input[2]) && input[2].every((elem: any, _index3: number) => "object" === typeof elem && null !== elem && $io2(elem, true))) && (Array.isArray(input[3]) && input[3].every((elem: any, _index4: number) => "object" === typeof elem && null !== elem && $io3(elem, true))));
})(input));
