import typia from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_equals } from "../internal/_test_equals";
export const test_createEquals_ObjectGenericAlias = _test_equals("ObjectGenericAlias", ObjectGenericAlias.generate, (input: any, _exceptionable: boolean): input is Alias => {
    const $io0 = (input: any, _exceptionable: boolean) => "string" === typeof input.value && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["value"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return "object" === typeof input && null !== input && $io0(input, true);
});
