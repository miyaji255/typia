import typia from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_ObjectOptional = _test_isClone("ObjectOptional", ObjectOptional.generate, (input) => ((input: any): typia.Primitive<ObjectOptional> | null => { const is = (input: any): input is ObjectOptional => {
    const $io0 = (input: any) => (undefined === input.id || "string" === typeof input.id) && (undefined === input.name || "string" === typeof input.name) && (undefined === input.email || "string" === typeof input.email) && (undefined === input.sequence || "number" === typeof input.sequence);
    return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
}; const clone = (input: ObjectOptional): typia.Primitive<ObjectOptional> => {
    const $co0 = (input: any) => ({
        id: input.id,
        name: input.name,
        email: input.email,
        sequence: input.sequence
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), ObjectOptional.SPOILERS);
