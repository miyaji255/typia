import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_llm_application_llama_ObjectJsonTag = _test_llm_application({
  model: "llama",
  name: "ObjectJsonTag",
})(typia.llm.application<ObjectJsonTagApplication, "llama">());

interface ObjectJsonTagApplication {
  insert(first: ObjectJsonTag): Promise<void>;
  reduce(
    first: ObjectJsonTag,
    second: ObjectJsonTag | null,
  ): Promise<ObjectJsonTag>;
  coalesce(
    first: ObjectJsonTag | null,
    second: ObjectJsonTag | null,
    third?: ObjectJsonTag | null,
  ): Promise<ObjectJsonTag | null>;
}
