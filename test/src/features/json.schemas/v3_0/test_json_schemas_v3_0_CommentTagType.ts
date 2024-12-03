import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { CommentTagType } from "../../../structures/CommentTagType";

export const test_json_schemas_v3_0_CommentTagType = _test_json_schemas({
  version: "3.0",
  name: "CommentTagType",
})(typia.json.schemas<[CommentTagType], "3.0">());