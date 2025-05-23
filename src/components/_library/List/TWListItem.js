import { useMedia } from 'react-use'
import { cn } from '../../../utils/cn'

const ListItem = ({ defaultColumns = '', queries = [], hoverable = false, children, className = '', style = {}, ...props }) => {
  const activeColumns = queries.reduce((columns, query) => {
    const matches = useMedia(`(${query.media})`)
    return matches ? query.columns : columns
  }, defaultColumns)

  const itemClasses = cn(
    'tw:!grid tw:!gap-2 tw:!overflow-hidden tw:group',
    {
      'tw:!cursor-pointer': hoverable,
    },
    className
  )

  return (
    <div
      className={itemClasses}
      style={{
        ...style,
        gridTemplateColumns: activeColumns
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default ListItem
