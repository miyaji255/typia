import typia from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_AtomicSimple = _test_isStringify("AtomicSimple", AtomicSimple.generate, (input) => ((input: AtomicSimple): string | null => { const is = (input: any): input is AtomicSimple => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && ("number" === typeof input[1] && !Number.isNaN(input[1])) && "string" === typeof input[2]);
}; const stringify = (input: AtomicSimple): string => {
    const $string = (typia.isStringify as any).string;
    return `[${input[0]},${input[1]},${$string(input[2])}]`;
}; return is(input) ? stringify(input) : null; })(input), AtomicSimple.SPOILERS);
