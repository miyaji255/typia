import typia from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_equals } from "../internal/_test_equals";
export const test_createEquals_ClassClosure = _test_equals("ClassClosure", ClassClosure.generate, (input: any, _exceptionable: boolean): input is Something => {
    const $io0 = (input: any, _exceptionable: boolean) => "string" === typeof input.id && "something" === input.type && true && (3 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["id", "type", "closure"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return "object" === typeof input && null !== input && $io0(input, true);
});
