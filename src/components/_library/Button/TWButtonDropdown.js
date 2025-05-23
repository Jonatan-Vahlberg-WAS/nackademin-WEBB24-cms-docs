import { useRef, useState } from 'react'
import Button from './TWButton'
import { cn } from '@/utils/cn'

const ButtonDropdown = ({
  variant = 'info',
  align = 'left',
  Toggle = "",
  toggleProps,
  children,
  menuClassName,
  menuProps,
 }) => {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)
  const dropdownMenuClasses = cn(
    'tw:!absolute tw:!top-full tw:!left-0 tw:!w-full tw:!z-10',
    'tw:!bg-white tw:!shadow-xl tw:!rounded-lg tw:!p-2 tw:!min-w-[200px] tw:!bottom-2',
    {
      'tw:!right-full tw:!translate-x-full': align === 'left',
      'tw:!left-full tw:!-translate-x-full': align === 'right',
      'tw:!hidden': !isOpen,
      'tw:!w-fit tw:!h-fit tw:!gap-2 tw:!flex tw:!flex-col tw:!p-2': isOpen
    },
    menuClassName
  )

  return (
    <div ref={wrapperRef}>
    <Button
      variant={variant}
      onClick={() => setIsOpen(!isOpen)}
      className='tw:!relative'
      {...toggleProps}
      > 
        {Toggle}
        <div className={dropdownMenuClasses} >
          {children}
        </div>
    </Button>
    </div>
  )
}

export default ButtonDropdown