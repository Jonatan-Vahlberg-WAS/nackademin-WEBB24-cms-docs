import { cn } from "@/utils/cn"
import ListItemColumn from "../List/TWListItemColumn"
import ListItem from "../List/TWListItem"

const Table = {
  Table: ({ children, className = '' }) => {
    const tableClasses = cn(
        'tw:!flex tw:!flex-col tw:!border tw:!border-gray-200 tw:!overflow-hidden tw:!border-collapse tw:!w-full',
        className
    )

    return (
      <div className={tableClasses}>
        {children}
      </div>
    )
  },
  Header: ({ children, columns = '', className = '', ...props }) => {
    const headerClasses = cn(
      'tw:!bg-gray-100 tw:!font-bold tw:!text-sm tw:!text-gray-600 tw:!py-4 tw:!px-2',
      className
    )

    return (
      <ListItem defaultColumns={columns} className={headerClasses} {...props}>
        {children}
      </ListItem>
    )
  },
  HeaderCell: ({ children, align = 'left', className = '', ...props }) => {
    const headerCellClasses = cn(
      'tw:!text-left tw:!font-bold tw:!text-sm tw:!px-2',
      'tw:not-last:!border-r tw:!border-gray-200',
      className
    )

    return <ListItemColumn align={align} className={headerCellClasses} {...props}>{children}</ListItemColumn>
  },
  Row: ({ children, columns = '', className = '', ...props }) => {
    const rowClasses = cn(
      'tw:odd:!bg-gray-100 tw:!py-1 tw:!px-2',
      className
    )

    return <ListItem defaultColumns={columns} className={rowClasses} {...props}>{children}</ListItem>
  },
  Cell: ({ children, align = 'left', className = '', ...props }) => {
    const cellClasses = cn(
      'tw:not-last:!border-r tw:!border-gray-200 tw:!px-2',
      className
    )
    return <ListItemColumn align={align} className={cellClasses} {...props}>{children}</ListItemColumn>
  }
}

export default Table
