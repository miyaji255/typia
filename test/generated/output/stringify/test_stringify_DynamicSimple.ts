import typia from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_DynamicSimple = _test_stringify("DynamicSimple", DynamicSimple.generate, (input) => ((input: DynamicSimple): string => {
    const $join = (typia.stringify as any).join;
    const $number = (typia.stringify as any).number;
    const $so0 = (input: any) => `{${Object.entries(input).map(([key, value]) => { if (undefined === value)
        return ""; return `${JSON.stringify(key)}:${$number(value)}`; }).filter(str => "" !== str).join(",")}}`;
    return $so0(input);
})(input));
