import typia from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_TagFormat = _test_clone("TagFormat", TagFormat.generate, (input: TagFormat): typia.Primitive<TagFormat> => {
    const $is_uuid = (typia.createClone as any).is_uuid;
    const $is_email = (typia.createClone as any).is_email;
    const $is_url = (typia.createClone as any).is_url;
    const $is_ipv4 = (typia.createClone as any).is_ipv4;
    const $is_ipv6 = (typia.createClone as any).is_ipv6;
    const $co0 = (input: any) => ({
        uuid: input.uuid,
        email: input.email,
        url: input.url,
        ipv4: input.ipv4,
        ipv6: input.ipv6,
        custom: input.custom
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
});
