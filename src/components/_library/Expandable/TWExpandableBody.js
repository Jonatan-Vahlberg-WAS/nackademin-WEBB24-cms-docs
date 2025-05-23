import { cn } from "../../../utils/cn"

const ExpandableBody = ({
  isExpanded = false,
  children,
  className,
  ...props
}) => {

  const bodyClasses = cn(
    'tw:!overflow-hidden tw:!transition-all tw:!duration-300',
    {
      'tw:!p-4 tw:!opacity-100 tw:!h-auto': isExpanded,
      'tw:!p-0 tw:!opacity-0 tw:!h-0': !isExpanded,
    },
    className || ""
  )

  return (
    <div className={bodyClasses} {...props}>
      {children}
    </div>
  )
}

export default ExpandableBody