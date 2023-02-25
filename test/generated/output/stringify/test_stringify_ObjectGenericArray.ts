import typia from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_ObjectGenericArray = _test_stringify("ObjectGenericArray", ObjectGenericArray.generate, (input) => ((input: ObjectGenericArray): string => {
    const $string = (typia.stringify as any).string;
    const $number = (typia.stringify as any).number;
    const $io1 = (input: any) => "number" === typeof input.page && "number" === typeof input.limit && "number" === typeof input.total_count && "number" === typeof input.total_pages;
    const $io2 = (input: any) => "string" === typeof input.name && "number" === typeof input.age;
    const $so0 = (input: any) => `{"pagination":${$so1(input.pagination)},"data":${`[${input.data.map((elem: any) => `{"name":${$string(elem.name)},"age":${$number(elem.age)}}`).join(",")}]`}}`;
    const $so1 = (input: any) => `{"page":${$number(input.page)},"limit":${$number(input.limit)},"total_count":${$number(input.total_count)},"total_pages":${$number(input.total_pages)}}`;
    return $so0(input);
})(input));
