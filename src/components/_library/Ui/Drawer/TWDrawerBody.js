import { cn } from '../../../../utils/cn'

const DrawerBody = ({ children, className, ...props }) => {
  const bodyClasses = cn('tw:!relative tw:!flex tw:!flex-col tw:!p-6', 'tw:!flex-1 tw:!fgrow-1', className)

  return (
    <div className={bodyClasses} {...props}>
      {children}
    </div>
  )
}

export default DrawerBody
