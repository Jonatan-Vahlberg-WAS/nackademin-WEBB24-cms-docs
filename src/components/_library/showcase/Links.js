import _ from "lodash";
import Link from "../Link/TWLink";
import Divider from "../Ui/TWDivider";
import { getVariantCombinations } from "../../../utils/componentHelpers";

const Links = () => {
  const linkVariants = {
    variant: [undefined, "warning", "danger", "info"],
    external: [undefined, true],
  };

  const linkCombinations = getVariantCombinations(linkVariants);

  const linkButtonVariants = {
    ...linkVariants,
    variant: [...linkVariants.variant, "success"],
    type: ["button"],
    size: [undefined, "sm", "xs"],
    outline: [undefined, true],
  };

  const linkButtonCombinations = getVariantCombinations(linkButtonVariants);

  return (
    <div id="components-links">
      <h2 className="text-xl font-bold mb-3">Links</h2>
      <div className="flex flex-wrap gap-4 mb-4">
        {linkCombinations.map((combination, index) => (
          <Link
            key={index}
            {...combination}
            title={`Link ${JSON.stringify(combination)}`}
          >
            {combination.external ? "External Link" : "Internal Link"}
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 mb-4">
        {linkButtonCombinations.map((combination, index) => (
          <Link
            key={index}
            {...combination}
            title={`Link ${JSON.stringify(combination)}`}
          >
            {combination.external ? "External Link" : "Internal Link"}
            (Button)
            {combination.type === "unstyled" && " (Unstyled)"}
          </Link>
        ))}
      </div>
      <Divider darker className="my-4" />
    </div>
  );
};

export default Links;
