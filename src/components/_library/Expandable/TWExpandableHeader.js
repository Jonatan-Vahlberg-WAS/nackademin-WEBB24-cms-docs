import { cn } from "../../../utils/cn";

const ExpandableHeader = ({ showDivider, children, className, ...props }) => {
  const headerClasses = cn(
    "flex flex-row justify-between items-center p-2 cursor-pointer *:cursor-pointer",
    {
      "border-b border-gray-200": showDivider,
    },
    className || ""
  );

  return (
    <div className={headerClasses} {...props}>
      {children}
    </div>
  );
};

export default ExpandableHeader;
