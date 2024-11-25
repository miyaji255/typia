import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_llm_application_llama_TypeTagMatrix = _test_llm_application({
  model: "llama",
  name: "TypeTagMatrix",
})(typia.llm.application<TypeTagMatrixApplication, "llama">());

interface TypeTagMatrixApplication {
  insert(first: TypeTagMatrix): Promise<void>;
  reduce(
    first: TypeTagMatrix,
    second: TypeTagMatrix | null,
  ): Promise<TypeTagMatrix>;
  coalesce(
    first: TypeTagMatrix | null,
    second: TypeTagMatrix | null,
    third?: TypeTagMatrix | null,
  ): Promise<TypeTagMatrix | null>;
}
