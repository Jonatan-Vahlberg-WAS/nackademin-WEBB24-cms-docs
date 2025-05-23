
import { cn } from "@/utils/cn"

const ChartContainer = ({ 
  children, 
  className = "",
  innerClassName = "",
  ChartActionBar = null,
  ...props
}) => {
  const chartContainerOuterClasses = cn(
    "tw:!flex tw:!flex-col tw:!items-end tw:!w-full",
    className
  )
  const chartContainerInnerClasses = cn(
    "tw:!w-full tw:!max-w-600px tw:!max-h-100 tw:!min-h-50",
    innerClassName
  )
  return (
    <div className={chartContainerOuterClasses}>
      {ChartActionBar && <ChartActionBar />}
      <div className={chartContainerInnerClasses}>
        {children}
      </div>
    </div>
  )
}

export default ChartContainer;