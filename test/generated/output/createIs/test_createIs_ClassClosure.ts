import typia from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_is } from "../internal/_test_is";
export const test_createIs_ClassClosure = _test_is("ClassClosure", ClassClosure.generate, (input: any): input is Something => {
    const $io0 = (input: any) => "string" === typeof input.id && "something" === input.type && true;
    return "object" === typeof input && null !== input && $io0(input);
}, ClassClosure.SPOILERS);
