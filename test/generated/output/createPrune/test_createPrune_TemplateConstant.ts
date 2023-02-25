import typia from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_prune } from "../internal/_test_prune";
export const test_createPrune_TemplateConstant = _test_prune("TemplateConstant", TemplateConstant.generate, (input: TemplateConstant): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("prefix" === key || "postfix" === key || "combined" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input))
        input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem)
                $po0(elem);
        });
});
