import { TagBase } from "./TagBase";

export type Example<
  Value extends boolean | bigint | number | string | Array<unknown> | null,
> = TagBase<{
  target: "boolean" | "bigint" | "number" | "string" | "array";
  kind: "example";
  value: Value;
  exclusive: true;
  schema: Value extends bigint
    ? { example: Numeric<Value> }
    : { example: Value };
}>;

type Numeric<T extends bigint> = `${T}` extends `${infer N extends number}`
  ? N
  : never;