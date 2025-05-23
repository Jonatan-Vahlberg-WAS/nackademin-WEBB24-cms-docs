import { cn } from "../../../utils/cn";

const ListHeader = ({ className = "", children }) => {
  const headerClasses = cn("flex items-center py-2 px-4", className);

  return <div className={headerClasses}>{children}</div>;
};

export default ListHeader;
