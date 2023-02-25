import typia from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_ArrayMatrix = _test_isStringify("ArrayMatrix", ArrayMatrix.generate, (input) => ((input: ArrayMatrix): string | null => { const is = (input: any): input is ArrayMatrix => {
    return Array.isArray(input) && input.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => "number" === typeof elem && !Number.isNaN(elem))));
}; const stringify = (input: ArrayMatrix): string => {
    return `[${input.map((elem: any) => `[${elem.map((elem: any) => `[${elem.map((elem: any) => elem).join(",")}]`).join(",")}]`).join(",")}]`;
}; return is(input) ? stringify(input) : null; })(input), ArrayMatrix.SPOILERS);
