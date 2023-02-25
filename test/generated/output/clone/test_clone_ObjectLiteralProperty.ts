import typia from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_ObjectLiteralProperty = _test_clone("ObjectLiteralProperty", ObjectLiteralProperty.generate, (input) => ((input: ISomething): typia.Primitive<ISomething> => {
    const $co0 = (input: any) => ({
        "something-interesting-do-you-want?": input["something-interesting-do-you-want?"],
        "or-something-crazy-do-you-want?": input["or-something-crazy-do-you-want?"]
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
})(input));
