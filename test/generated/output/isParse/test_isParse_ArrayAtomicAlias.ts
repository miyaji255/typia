import typia from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_isParse } from "../internal/_test_isParse";
export const test_isParse_ArrayAtomicAlias = _test_isParse("ArrayAtomicAlias", ArrayAtomicAlias.generate, (input) => ((input: any): typia.Primitive<ArrayAtomicAlias> => { const is = (input: any): input is ArrayAtomicAlias => {
    return Array.isArray(input) && (input.length === 3 && (Array.isArray(input[0]) && input[0].every((elem: any) => "boolean" === typeof elem)) && (Array.isArray(input[1]) && input[1].every((elem: any) => "number" === typeof elem)) && (Array.isArray(input[2]) && input[2].every((elem: any) => "string" === typeof elem)));
}; input = JSON.parse(input); return is(input) ? input as any : null; })(input), ArrayAtomicAlias.SPOILERS);
