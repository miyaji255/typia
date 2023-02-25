import typia from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_isParse } from "../internal/_test_isParse";
export const test_createIsParse_ObjectLiteralProperty = _test_isParse("ObjectLiteralProperty", ObjectLiteralProperty.generate, (input: any): typia.Primitive<ISomething> => { const is = (input: any): input is ISomething => {
    return "object" === typeof input && null !== input && ("string" === typeof input["something-interesting-do-you-want?"] && "string" === typeof input["or-something-crazy-do-you-want?"]);
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ObjectLiteralProperty.SPOILERS);
