import { useMedia } from "react-use"
import { cn } from "../../../utils/cn"
import { cloneElement } from "react"


const ListItemColumn = ({
  query = '',
  children,
  className = '',
  style = {},
  align = 'left',
  useWrapper = false,
  shouldTruncate = false,
  title = '',
}) => {

  const shouldNotRender= useMedia(`(${query})`)

  const columnClasses = cn(
    {
      'tw:!justify-self-end tw:!text-end tw:!text-right': align === 'right',
      'tw:!justify-self-center tw:!text-center': align === 'center',
      'tw:!text-ellipsis tw:!overflow-hidden tw:!whitespace-nowrap': shouldTruncate,
    },
    className
  )
  if(useWrapper || (!children || typeof children === 'string')) {
    return shouldNotRender && query ? null : <div className={columnClasses} style={style}>{children}</div>
  }

  const clonedChildren = cloneElement(children, {
    className: cn(children.props?.className || '', columnClasses),
    title,
  })

  return shouldNotRender && query ? null : clonedChildren
}

export default ListItemColumn
