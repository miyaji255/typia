import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_llm_applicationOfValidate_3_0_ClassMethod =
  _test_llm_applicationOfValidate({
    model: "3.0",
    name: "ClassMethod",
    factory: ClassMethod,
  })(typia.llm.applicationOfValidate<ClassMethodApplication, "3.0">());

interface ClassMethodApplication {
  insert(p: { first: ClassMethod }): Promise<void>;
  reduce(p: {
    first: ClassMethod;
    second: ClassMethod | null;
  }): Promise<ClassMethod>;
  coalesce(p: {
    first: ClassMethod | null;
    second: ClassMethod | null;
    third?: ClassMethod | null;
  }): Promise<ClassMethod | null>;
}