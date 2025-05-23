import { cn } from "../../../utils/cn"

const ExpandableHeader = ({
  showDivider,
  children,
  className,
  ...props
}) => {

  const headerClasses = cn(
    'tw:!flex tw:!flex-row tw:!justify-between tw:!items-center tw:!p-2 tw:!cursor-pointer tw:!*:cursor-pointer',
    {
      'tw:!border-b tw:!border-gray-200': showDivider,
    },
    className || ""
  )

  return (
    <div className={headerClasses} {...props}>
      {children}
    </div>
  )
}

export default ExpandableHeader