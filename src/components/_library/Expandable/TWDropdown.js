
import { cn } from '@/utils/cn'
import { useState } from 'react'

const Dropdown = ({ 
  children, 
  title, 
  icon, 
  openInitially = false 
}) => {
  const [isOpen, setIsOpen] = useState(openInitially)
  const toggleDropdown = () => setIsOpen(!isOpen)

  const wrapperClasses = cn('tw:!flex tw:!flex-col', 'tw:!rounded-sm tw:!border tw:!border-gray-100')

  const headerClasses = cn(
    'tw:!flex tw:!flex-row tw:!justify-between tw:!items-center tw:!cursor-pointer',
    'tw:!px-4 tw:!py-2',
    'tw:!bg-gray-50 tw:!font-bold tw:!text-gray-800'
  )

  const headerSideClasses = cn('tw:!flex tw:!flex-row tw:!items-center')

  const headerIconClasses = cn(icon, 'tw:!mr-2')

  const chevronClasses = cn('fa', {
    'fa-chevron-up': isOpen,
    'fa-chevron-down': !isOpen
  })

  const bodyClasses = cn(
    "tw:!transition-all tw:!duration-300 tw:!bg-white",
    {
      'tw:!visible tw:!h-auto tw:!p-4': isOpen,
      'tw:!hidden tw:!h-0': !isOpen
    }
  )

  return (
    <div className={wrapperClasses}>
      <div className={headerClasses} onClick={toggleDropdown}>
        <div className={headerSideClasses}>
          {icon && <i className={headerIconClasses}></i>}
          {title}
        </div>

        <i className={chevronClasses}></i>
      </div>
      <div className={bodyClasses}>{children}</div>
    </div>
  )
}

export default Dropdown
