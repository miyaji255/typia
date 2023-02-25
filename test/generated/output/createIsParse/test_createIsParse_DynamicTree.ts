import typia from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_isParse } from "../internal/_test_isParse";
export const test_createIsParse_DynamicTree = _test_isParse("DynamicTree", DynamicTree.generate, (input: any): typia.Primitive<DynamicTree> => { const is = (input: any): input is DynamicTree => {
    const $join = (typia.createIsParse as any).join;
    const $io0 = (input: any) => "string" === typeof input.id && "number" === typeof input.sequence && ("object" === typeof input.children && null !== input.children && false === Array.isArray(input.children) && $io1(input.children));
    const $io1 = (input: any) => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/(.*)/).test(key))
            return "object" === typeof value && null !== value && $io0(value);
        return true;
    });
    return "object" === typeof input && null !== input && $io0(input);
}; input = JSON.parse(input); return is(input) ? input as any : null; }, DynamicTree.SPOILERS);
