import { useMedia } from 'react-use'
import React from 'react'

import { cn } from '../../../utils/cn'

import Menu from '../../menu'
import Snackbar from '../../Snackbar'
import FreeFormJoyrideComponent from '../../Joyride/Joyride'
import StatusBox from '../../StatusBox'

const Layout = ({ loginPage, nonProtectedPage, defaultStyling, disablePageScroll = false, disableDropdown = false, ...props }) => {
  const isLargeScreen = useMedia('(min-width: 1200px)', true)

  const wrapperClasses = cn(
    'tw:!pl-0 tw:xl:!pl-menu tw:!pt-8', 
    {
    'tw:!p-0 tw:!w-full tw:!mt-menu-folded': !isLargeScreen,
  })

  const innerWrapperClasses = cn(
    'tw:!min-h-screen tw:!flex tw:!flex-col tw:!overflow-auto',
    'tw:!w-full tw:!mx-auto',
    'tw:!scroll-auto',
    'tw:!font-[benton-sans] tw:!font-normal tw:!font-medium',
    'tw:!ms-overflow-style-none tw-no-scrollbar',
    {
      'tw:!h-full': disablePageScroll
    }
  )

  return (
    <div>
      {isLargeScreen && <StatusBox disableDropdown={disableDropdown} />}
      <div className={wrapperClasses}>
        <Menu />
        <div className={innerWrapperClasses} id='container-fluid'>
          {!isLargeScreen && <StatusBox disableDropdown={disableDropdown} />}
          {props.children}
        </div>
      </div>
      <Snackbar />
      <FreeFormJoyrideComponent />
    </div>
  )
}

export default Layout
