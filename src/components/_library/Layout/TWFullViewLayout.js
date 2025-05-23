import FreeFormJoyrideComponent from "@/components/Joyride/Joyride";
import Menu from "@/components/menu";
import StaffMenu from "@/components/menu/StaffMenu";
import Snackbar from "@/components/Snackbar";

import { cn } from "@/utils/cn";

const FullViewLayout = ({ children, staff = false }) => {
  const wrapperClasses = cn("flex flex-col h-full w-full");
  const innerWrapperClasses = cn(
    "w-full mx-auto pt-menu-mobile xl:!pt-0 xl:!pl-menu"
  );
  const contentWrapperClasses = cn(
    "pl-8 pr-8 xl:!py-8 w-full max-h-screen overflow-auto"
  );
  return (
    <div className={wrapperClasses}>
      <div className={innerWrapperClasses}>
        <div className={contentWrapperClasses}>{children}</div>
      </div>
      {!staff && <Menu />}
      {staff && <StaffMenu />}
      <Snackbar />
      <FreeFormJoyrideComponent />
    </div>
  );
};

export default FullViewLayout;
