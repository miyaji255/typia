import typia from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_validateParse } from "../internal/_test_validateParse";
export const test_createValidateParse_ObjectHierarchical = _test_validateParse("ObjectHierarchical", ObjectHierarchical.generate, (input: string): typia.IValidation<typia.Primitive<ICustomer>> => { const validate = (input: any): typia.IValidation<ICustomer> => {
    const errors = [] as any[];
    const $report = (typia.createValidateParse as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ICustomer => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id
            }), ("object" === typeof input.channel && null !== input.channel || $report(_exceptionable, {
                path: _path + ".channel",
                expected: "Resolve<ObjectHierarchical.IChannel>",
                value: input.channel
            })) && $vo1(input.channel, _path + ".channel", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".channel",
                expected: "Resolve<ObjectHierarchical.IChannel>",
                value: input.channel
            }), ("object" === typeof input.member && null !== input.member || $report(_exceptionable, {
                path: _path + ".member",
                expected: "Resolve<ObjectHierarchical.IMember>",
                value: input.member
            })) && $vo3(input.member, _path + ".member", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".member",
                expected: "Resolve<ObjectHierarchical.IMember>",
                value: input.member
            }), ("object" === typeof input.account && null !== input.account || $report(_exceptionable, {
                path: _path + ".account",
                expected: "Resolve<ObjectHierarchical.IAccount>",
                value: input.account
            })) && $vo4(input.account, _path + ".account", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".account",
                expected: "Resolve<ObjectHierarchical.IAccount>",
                value: input.account
            }), "string" === typeof input.href || $report(_exceptionable, {
                path: _path + ".href",
                expected: "string",
                value: input.href
            }), "string" === typeof input.referrer || $report(_exceptionable, {
                path: _path + ".referrer",
                expected: "string",
                value: input.referrer
            }), (Array.isArray(input.ip) || $report(_exceptionable, {
                path: _path + ".ip",
                expected: "[number, number, number, number]",
                value: input.ip
            })) && ((input.ip.length === 4 || $report(_exceptionable, {
                path: _path + ".ip",
                expected: "[number, number, number, number]",
                value: input.ip
            })) && [
                "number" === typeof input.ip[0] || $report(_exceptionable, {
                    path: _path + ".ip[0]",
                    expected: "number",
                    value: input.ip[0]
                }),
                "number" === typeof input.ip[1] || $report(_exceptionable, {
                    path: _path + ".ip[1]",
                    expected: "number",
                    value: input.ip[1]
                }),
                "number" === typeof input.ip[2] || $report(_exceptionable, {
                    path: _path + ".ip[2]",
                    expected: "number",
                    value: input.ip[2]
                }),
                "number" === typeof input.ip[3] || $report(_exceptionable, {
                    path: _path + ".ip[3]",
                    expected: "number",
                    value: input.ip[3]
                })
            ].every((flag: boolean) => flag)) || $report(_exceptionable, {
                path: _path + ".ip",
                expected: "[number, number, number, number]",
                value: input.ip
            }), ("object" === typeof input.created_at && null !== input.created_at || $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "Resolve<ObjectHierarchical.ITimestamp>",
                value: input.created_at
            })) && $vo2(input.created_at, _path + ".created_at", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "Resolve<ObjectHierarchical.ITimestamp>",
                value: input.created_at
            })].every((flag: boolean) => flag);
        const $vo1 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id
            }), "string" === typeof input.code || $report(_exceptionable, {
                path: _path + ".code",
                expected: "string",
                value: input.code
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), "number" === typeof input.sequence || $report(_exceptionable, {
                path: _path + ".sequence",
                expected: "number",
                value: input.sequence
            }), "boolean" === typeof input.exclusive || $report(_exceptionable, {
                path: _path + ".exclusive",
                expected: "boolean",
                value: input.exclusive
            }), "number" === typeof input.priority || $report(_exceptionable, {
                path: _path + ".priority",
                expected: "number",
                value: input.priority
            }), ("object" === typeof input.created_at && null !== input.created_at || $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "Resolve<ObjectHierarchical.ITimestamp>",
                value: input.created_at
            })) && $vo2(input.created_at, _path + ".created_at", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "Resolve<ObjectHierarchical.ITimestamp>",
                value: input.created_at
            })].every((flag: boolean) => flag);
        const $vo2 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.time || $report(_exceptionable, {
                path: _path + ".time",
                expected: "number",
                value: input.time
            }), "number" === typeof input.zone || $report(_exceptionable, {
                path: _path + ".zone",
                expected: "number",
                value: input.zone
            })].every((flag: boolean) => flag);
        const $vo3 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id
            }), ("object" === typeof input.account && null !== input.account || $report(_exceptionable, {
                path: _path + ".account",
                expected: "Resolve<ObjectHierarchical.IAccount>",
                value: input.account
            })) && $vo4(input.account, _path + ".account", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".account",
                expected: "Resolve<ObjectHierarchical.IAccount>",
                value: input.account
            }), ("object" === typeof input.enterprise && null !== input.enterprise || $report(_exceptionable, {
                path: _path + ".enterprise",
                expected: "Resolve<ObjectHierarchical.IEnterprise>",
                value: input.enterprise
            })) && $vo5(input.enterprise, _path + ".enterprise", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".enterprise",
                expected: "Resolve<ObjectHierarchical.IEnterprise>",
                value: input.enterprise
            }), (Array.isArray(input.emails) || $report(_exceptionable, {
                path: _path + ".emails",
                expected: "Array<string>",
                value: input.emails
            })) && input.emails.map((elem: any, _index1: number) => "string" === typeof elem || $report(_exceptionable, {
                path: _path + ".emails[" + _index1 + "]",
                expected: "string",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".emails",
                expected: "Array<string>",
                value: input.emails
            }), ("object" === typeof input.created_at && null !== input.created_at || $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "Resolve<ObjectHierarchical.ITimestamp>",
                value: input.created_at
            })) && $vo2(input.created_at, _path + ".created_at", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "Resolve<ObjectHierarchical.ITimestamp>",
                value: input.created_at
            }), "boolean" === typeof input.authorized || $report(_exceptionable, {
                path: _path + ".authorized",
                expected: "boolean",
                value: input.authorized
            })].every((flag: boolean) => flag);
        const $vo4 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id
            }), "string" === typeof input.code || $report(_exceptionable, {
                path: _path + ".code",
                expected: "string",
                value: input.code
            }), ("object" === typeof input.created_at && null !== input.created_at || $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "Resolve<ObjectHierarchical.ITimestamp>",
                value: input.created_at
            })) && $vo2(input.created_at, _path + ".created_at", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "Resolve<ObjectHierarchical.ITimestamp>",
                value: input.created_at
            })].every((flag: boolean) => flag);
        const $vo5 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id
            }), ("object" === typeof input.account && null !== input.account || $report(_exceptionable, {
                path: _path + ".account",
                expected: "Resolve<ObjectHierarchical.IAccount>",
                value: input.account
            })) && $vo4(input.account, _path + ".account", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".account",
                expected: "Resolve<ObjectHierarchical.IAccount>",
                value: input.account
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), "number" === typeof input.grade || $report(_exceptionable, {
                path: _path + ".grade",
                expected: "number",
                value: input.grade
            }), ("object" === typeof input.created_at && null !== input.created_at || $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "Resolve<ObjectHierarchical.ITimestamp>",
                value: input.created_at
            })) && $vo2(input.created_at, _path + ".created_at", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "Resolve<ObjectHierarchical.ITimestamp>",
                value: input.created_at
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectHierarchical.ICustomer>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectHierarchical.ICustomer>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ICustomer>;
}; input = JSON.parse(input); const output = validate(input); return output; }, ObjectHierarchical.SPOILERS);
