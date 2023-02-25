import typia from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_assertClone_TupleRestObject = _test_assertClone("TupleRestObject", TupleRestObject.generate, (input) => ((input: any): typia.Primitive<TupleRestObject> => { const assert = (input: any) => {
    const $guard = (typia.assertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is TupleRestObject => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => "string" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "string",
            value: input.value
        });
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "[boolean, number, ...Resolve<TupleRestObject.IObject>]",
            value: input
        })) && (("boolean" === typeof input[0] || $guard(true, {
            path: _path + "[0]",
            expected: "boolean",
            value: input[0]
        })) && ("number" === typeof input[1] || $guard(true, {
            path: _path + "[1]",
            expected: "number",
            value: input[1]
        })) && ((Array.isArray(input.slice(2)) || $guard(true, {
            path: _path + "",
            expected: "Array<Resolve<TupleRestObject.IObject>>",
            value: input.slice(2)
        })) && input.slice(2).every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + (2 + _index1) + "]",
            expected: "Resolve<TupleRestObject.IObject>",
            value: elem
        })) && $ao0(elem, _path + "[" + (2 + _index1) + "]", true))));
    })(input, "$input", true);
    return input as TupleRestObject;
}; const clone = (input: TupleRestObject): typia.Primitive<TupleRestObject> => {
    const $io0 = (input: any) => "string" === typeof input.value;
    const $co0 = (input: any) => ({
        value: input.value
    });
    return Array.isArray(input) && ("boolean" === typeof input[0] && "number" === typeof input[1] && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)))) ? [
        input[0],
        input[1],
        ...Array.isArray(input.slice(2)) ? input.slice(2).map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input.slice(2)
    ] : input;
}; assert(input); const output = clone(input); /* TupleRestObject */; return output as TupleRestObject; })(input), TupleRestObject.SPOILERS);
