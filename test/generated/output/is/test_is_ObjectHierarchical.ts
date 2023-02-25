import typia from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_is } from "../internal/_test_is";
export const test_is_ObjectHierarchical = _test_is("ObjectHierarchical", ObjectHierarchical.generate, (input) => ((input: any): input is ICustomer => {
    const $io0 = (input: any) => "number" === typeof input.id && ("object" === typeof input.channel && null !== input.channel && $io1(input.channel)) && ("object" === typeof input.member && null !== input.member && $io3(input.member)) && ("object" === typeof input.account && null !== input.account && $io4(input.account)) && "string" === typeof input.href && "string" === typeof input.referrer && (Array.isArray(input.ip) && (input.ip.length === 4 && "number" === typeof input.ip[0] && "number" === typeof input.ip[1] && "number" === typeof input.ip[2] && "number" === typeof input.ip[3])) && ("object" === typeof input.created_at && null !== input.created_at && ("number" === typeof input.created_at.time && "number" === typeof input.created_at.zone));
    const $io1 = (input: any) => "number" === typeof input.id && "string" === typeof input.code && "string" === typeof input.name && "number" === typeof input.sequence && "boolean" === typeof input.exclusive && "number" === typeof input.priority && ("object" === typeof input.created_at && null !== input.created_at && ("number" === typeof input.created_at.time && "number" === typeof input.created_at.zone));
    const $io3 = (input: any) => "number" === typeof input.id && ("object" === typeof input.account && null !== input.account && $io4(input.account)) && ("object" === typeof input.enterprise && null !== input.enterprise && $io5(input.enterprise)) && (Array.isArray(input.emails) && input.emails.every((elem: any) => "string" === typeof elem)) && ("object" === typeof input.created_at && null !== input.created_at && ("number" === typeof input.created_at.time && "number" === typeof input.created_at.zone)) && "boolean" === typeof input.authorized;
    const $io4 = (input: any) => "number" === typeof input.id && "string" === typeof input.code && ("object" === typeof input.created_at && null !== input.created_at && ("number" === typeof input.created_at.time && "number" === typeof input.created_at.zone));
    const $io5 = (input: any) => "number" === typeof input.id && ("object" === typeof input.account && null !== input.account && $io4(input.account)) && "string" === typeof input.name && "number" === typeof input.grade && ("object" === typeof input.created_at && null !== input.created_at && ("number" === typeof input.created_at.time && "number" === typeof input.created_at.zone));
    return "object" === typeof input && null !== input && $io0(input);
})(input), ObjectHierarchical.SPOILERS);
