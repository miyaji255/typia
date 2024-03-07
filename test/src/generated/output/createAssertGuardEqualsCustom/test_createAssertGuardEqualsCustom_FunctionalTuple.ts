import typia from "typia";
import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { FunctionalTuple } from "../../../structures/FunctionalTuple";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_createAssertGuardEqualsCustom_FunctionalTuple =
  _test_assertGuardEquals(CustomGuardError)("FunctionalTuple")<FunctionalTuple>(
    FunctionalTuple,
  )(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): asserts input is FunctionalTuple => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is FunctionalTuple => {
        return (
          Array.isArray(input) &&
          input.length === 3 &&
          "function" === typeof input[0] &&
          "function" === typeof input[1] &&
          "function" === typeof input[2]
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is FunctionalTuple => {
          const $guard = (typia.createAssertGuardEquals as any).guard;
          return (
            ((Array.isArray(input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "FunctionalTuple",
                  value: input,
                },
                errorFactory,
              )) &&
              (input.length === 3 ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "[unknown, unknown, unknown]",
                    value: input,
                  },
                  errorFactory,
                )) &&
              ("function" === typeof input[0] ||
                $guard(
                  true,
                  {
                    path: _path + "[0]",
                    expected: "unknown",
                    value: input[0],
                  },
                  errorFactory,
                )) &&
              ("function" === typeof input[1] ||
                $guard(
                  true,
                  {
                    path: _path + "[1]",
                    expected: "unknown",
                    value: input[1],
                  },
                  errorFactory,
                )) &&
              ("function" === typeof input[2] ||
                $guard(
                  true,
                  {
                    path: _path + "[2]",
                    expected: "unknown",
                    value: input[2],
                  },
                  errorFactory,
                ))) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "FunctionalTuple",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
    },
  );