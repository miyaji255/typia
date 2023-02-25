import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_createAssertEquals_ObjectPrimitive = _test_assertEquals("ObjectPrimitive", ObjectPrimitive.generate, (input: any) => {
    ((input: any, _path: string, _exceptionable: boolean): input is Primitive<IArticle> => {
        return true;
    })(input, "$input", true);
    return input as ObjectPrimitive;
});
