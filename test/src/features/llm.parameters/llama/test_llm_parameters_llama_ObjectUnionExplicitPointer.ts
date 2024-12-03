import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";

export const test_llm_parameters_llama_ObjectUnionExplicitPointer =
  _test_llm_parameters({
    model: "llama",
    name: "ObjectUnionExplicitPointer",
  })(typia.llm.parameters<ObjectUnionExplicitPointerParameters, "llama">());

interface ObjectUnionExplicitPointerParameters {
  regular: ObjectUnionExplicitPointer;
  nullable: ObjectUnionExplicitPointer | null;
  optional: ObjectUnionExplicitPointer | undefined;
  faint: ObjectUnionExplicitPointer | null | undefined;
  array: Array<ObjectUnionExplicitPointer>;
}