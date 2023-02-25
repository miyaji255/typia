import typia from "../../../src";
import { ClassNonPublic } from "../../structures/ClassNonPublic";
import { _test_is } from "../internal/_test_is";
export const test_createIs_ClassNonPublic = _test_is("ClassNonPublic", ClassNonPublic.generate, (input: any): input is Accessor => {
    return "object" === typeof input && null !== input && ("string" === typeof input.implicit && "string" === typeof input.shown);
}, ClassNonPublic.SPOILERS);
