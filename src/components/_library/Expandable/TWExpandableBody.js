import { cn } from "../../../utils/cn";

const ExpandableBody = ({
  isExpanded = false,
  children,
  className,
  ...props
}) => {
  const bodyClasses = cn(
    "overflow-hidden transition-all duration-300",
    {
      "p-4 opacity-100 h-auto": isExpanded,
      "p-0 opacity-0 h-0": !isExpanded,
    },
    className || ""
  );

  return (
    <div className={bodyClasses} {...props}>
      {children}
    </div>
  );
};

export default ExpandableBody;
