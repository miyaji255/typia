import typia from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_isParse } from "../internal/_test_isParse";
export const test_isParse_TupleRestObject = _test_isParse("TupleRestObject", TupleRestObject.generate, (input) => ((input: any): typia.Primitive<TupleRestObject> => { const is = (input: any): input is TupleRestObject => {
    const $io0 = (input: any) => "string" === typeof input.value;
    return Array.isArray(input) && ("boolean" === typeof input[0] && "number" === typeof input[1] && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem))));
}; input = JSON.parse(input); return is(input) ? input as any : null; })(input), TupleRestObject.SPOILERS);
