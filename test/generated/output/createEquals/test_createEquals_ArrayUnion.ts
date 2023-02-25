import typia from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_equals } from "../internal/_test_equals";
export const test_createEquals_ArrayUnion = _test_equals("ArrayUnion", ArrayUnion.generate, (input: any, _exceptionable: boolean): input is ArrayUnion => {
    return Array.isArray(input) && input.every((elem: any, _index1: number) => Array.isArray(elem) && (() => {
        if (0 === elem.length)
            return true;
        const tupleList = [[top => "string" === typeof top, top => top.every((elem: any, _index2: number) => "string" === typeof elem)], [top => "boolean" === typeof top, top => top.every((elem: any, _index2: number) => "boolean" === typeof elem)], [top => "number" === typeof top, top => top.every((elem: any, _index2: number) => "number" === typeof elem)]];
        const front = elem[0];
        const filtered = tupleList.filter(tuple => true === tuple[0](front));
        if (1 === filtered.length)
            return filtered[0][1](elem);
        const array = elem;
        if (1 < filtered.length)
            for (const tuple of filtered)
                if (array.every((value: any) => true === tuple[0](value)))
                    return tuple[1](array);
        return false;
    })());
});
