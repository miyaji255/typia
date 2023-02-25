import typia from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_equals } from "../internal/_test_equals";
export const test_createEquals_ObjectInternal = _test_equals("ObjectInternal", ObjectInternal.generate, (input: any, _exceptionable: boolean): input is ObjectInternal => {
    const $io0 = (input: any, _exceptionable: boolean) => "string" === typeof input.id && "string" === typeof input.name && (2 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["id", "name"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return "object" === typeof input && null !== input && $io0(input, true);
});
