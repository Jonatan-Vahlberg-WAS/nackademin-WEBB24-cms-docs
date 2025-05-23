import { cn } from "../../../utils/cn";

const ListHeader = ({
  className = '',
  children,
}) => {
  const headerClasses = cn(
    'tw:!flex tw:!items-center tw:!py-2 tw:!px-4',
    className
  );

  return (
    <div className={headerClasses}>
      {children}
    </div>
  );
}

export default ListHeader;