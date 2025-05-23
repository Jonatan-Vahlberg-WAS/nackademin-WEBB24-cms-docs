import { cn } from "@/utils/cn"

import T from "@/library/UI/TWTypography"
import Card from "@/library/Card/TWCard"
export const ListEmptyStateWrapper = ({ children }) => {
  const emptyStateContainerClasses = cn(
    'tw:!absolute tw:!top-0 tw:!left-0 tw:!right-0 tw:!bottom-0 tw:!flex tw:!flex-col tw:!items-center tw:!justify-center tw:!h-full tw:!w-full',
  )
  return (
    <div className={emptyStateContainerClasses}>
      {children}
    </div>
  )
}

const ListEmptyState = ({ 
  children,
  title,
  description,
 }) => {

  return (
    <ListEmptyStateWrapper>
      <Card className="tw:!bg-gray-50">
        {title && <T.Title>{title}</T.Title>}
        {description && <T.Text
          className={children ? "tw:!mb-4" : "tw:!mb-0"}
        >{description}</T.Text>}
        {children && children}
      </Card>
    </ListEmptyStateWrapper>
  )
}

export default ListEmptyState