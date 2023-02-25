import typia from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_MapUnion = _test_stringify("MapUnion", MapUnion.generate, (input) => ((input: MapUnion): string => {
    const $string = (typia.stringify as any).string;
    const $number = (typia.stringify as any).number;
    return `[${input.map((elem: any) => "{}").join(",")}]`;
})(input));
