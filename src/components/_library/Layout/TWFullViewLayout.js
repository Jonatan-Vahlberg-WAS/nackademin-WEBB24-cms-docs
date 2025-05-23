import FreeFormJoyrideComponent from "@/components/Joyride/Joyride";
import Menu from "@/components/menu";
import StaffMenu from "@/components/menu/StaffMenu";
import Snackbar from "@/components/Snackbar";

import { cn } from "@/utils/cn";

const FullViewLayout = ({
  children,
  staff = false,
 }) => {

  const wrapperClasses = cn('tw:!flex tw:!flex-col tw:!h-full tw:!w-full')
  const innerWrapperClasses = cn('tw:!w-full tw:!mx-auto tw:!pt-menu-mobile tw:xl:!pt-0 tw:xl:!pl-menu')
  const contentWrapperClasses = cn('tw:!pl-8 tw:!pr-8 tw:xl:!py-8 tw:!w-full tw:!max-h-screen tw:!overflow-auto')
  return (
    <div className={wrapperClasses}>
      <div className={innerWrapperClasses}>
        <div className={contentWrapperClasses}>
          {children}
        </div>
      </div>
      {!staff &&  <Menu />}
      {staff && <StaffMenu />}
      <Snackbar />
      <FreeFormJoyrideComponent />
    </div>
  )
}

export default FullViewLayout