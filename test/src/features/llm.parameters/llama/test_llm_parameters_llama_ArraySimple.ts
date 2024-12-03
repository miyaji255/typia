import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_llm_parameters_llama_ArraySimple = _test_llm_parameters({
  model: "llama",
  name: "ArraySimple",
})(typia.llm.parameters<ArraySimpleParameters, "llama">());

interface ArraySimpleParameters {
  regular: ArraySimple;
  nullable: ArraySimple | null;
  optional: ArraySimple | undefined;
  faint: ArraySimple | null | undefined;
  array: Array<ArraySimple>;
}