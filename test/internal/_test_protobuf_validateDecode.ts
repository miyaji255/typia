import typia from "typia";

import { _test_protobuf_decode } from "./_test_protobuf_decode";

export const _test_protobuf_validateDecode =
    (name: string) =>
    <T extends object>(factory: { generate(): T }) =>
    (functor: {
        validateDecode: (input: Uint8Array) => typia.IValidation<T>;
        encode: (input: T) => Uint8Array;
    }) =>
    () => {
        _test_protobuf_decode(name)(factory)({
            decode: (input) => {
                const result = functor.validateDecode(input);
                if (!result.success) throw new Error();
                return result.data;
            },
            encode: functor.encode,
        })();
    };
