import { cn } from '@/utils/cn';
import ScrollWrapper from '@/components/Modal/ScrollWrapper';
import DefaultDrawerHeader from './TWDrawerHeader';
import { useState } from 'react';

const Drawer = ({
  drawerStorageKey = 'drawer',
  isOpen = false,
  allowScroll = false,
  actions = {},
  children,
  DrawerHeader,
  DrawerFooter,
  className,
  color = 'white',
  toggle = () => {},
  ActionBar = () => null,
  ...props
}) => {
  DrawerHeader = DrawerHeader || DefaultDrawerHeader;

  const [forceExpanded, setForceExpanded] = useState(localStorage.getItem(drawerStorageKey) === 'true' || false);

  const overlayClasses = cn(
    'tw:!fixed tw:!inset-0 tw:!z-[999] tw:!cursor-pointer',
    {
      'tw:!bg-black/50 tw:!visible tw:!opacity-100': isOpen,
      'tw:!bg-transparent tw:!invisible tw:!opacity-0': !isOpen
    },
    'tw:!transition-all tw:!duration-300'
  )

  const drawerClasses = cn(
    'tw:!absolute tw:!flex tw:!flex-col tw:!top-0 tw:!right-0 tw:!bottom-0 tw:!z-[1000] tw:!bg-white tw:!h-screen tw:!cursor-default tw:!overflow-hidden',
    'tw:!transition-[width] tw:!duration-250 tw:!ease-in-out',
    {
      'tw:!w-0': !isOpen,
      'tw:!w-full tw:xl:!w-main-content': isOpen && !forceExpanded,
      'tw:!w-full tw:xl:!w-full': isOpen && forceExpanded,
      'tw:!bg-gray-50': color === 'gray'
    },
    className
  )

  const drawerBodyClasses = cn(
    'tw:!px-6  tw:!flex tw:!flex-col tw:!flex-1 tw:!overflow-y-auto tw:!overflow-x-hidden tw:!box-border'
  )
  
  return (
    <ScrollWrapper isOpen={isOpen} allowScroll={allowScroll} prefix="drawer">
      <div className={overlayClasses} onMouseDown={toggle} isOpen={isOpen}>
        <div 
          className={drawerClasses} 
          onMouseDown={(e) => e.stopPropagation()} 
          onClick={(e) => e.stopPropagation()} 
          {...props}
        >
          <DrawerHeader 
            toggle={toggle} 
            forceExpanded={forceExpanded}
            setForceExpanded={(value) => {
              setForceExpanded(value)
              localStorage.setItem(drawerStorageKey, JSON.stringify(value))
            }}
          />
          <div className={drawerBodyClasses}>{children}</div>
          <ActionBar {...actions} />
          {DrawerFooter && <DrawerFooter />}
        </div>
      </div>
    </ScrollWrapper>
  )
}

export default Drawer
