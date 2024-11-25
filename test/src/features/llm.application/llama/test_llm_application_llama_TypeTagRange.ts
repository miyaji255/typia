import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_llm_application_llama_TypeTagRange = _test_llm_application({
  model: "llama",
  name: "TypeTagRange",
})(typia.llm.application<TypeTagRangeApplication, "llama">());

interface TypeTagRangeApplication {
  insert(first: TypeTagRange): Promise<void>;
  reduce(
    first: TypeTagRange,
    second: TypeTagRange | null,
  ): Promise<TypeTagRange>;
  coalesce(
    first: TypeTagRange | null,
    second: TypeTagRange | null,
    third?: TypeTagRange | null,
  ): Promise<TypeTagRange | null>;
}
