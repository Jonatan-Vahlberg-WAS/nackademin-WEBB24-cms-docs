import { useMedia } from "react-use";
import React from "react";

import { cn } from "../../../utils/cn";

import Menu from "../../menu";
import Snackbar from "../../Snackbar";
import FreeFormJoyrideComponent from "../../Joyride/Joyride";
import StatusBox from "../../StatusBox";

const Layout = ({
  loginPage,
  nonProtectedPage,
  defaultStyling,
  disablePageScroll = false,
  disableDropdown = false,
  ...props
}) => {
  const isLargeScreen = useMedia("(min-width: 1200px)", true);

  const wrapperClasses = cn("pl-0 xl:!pl-menu pt-8", {
    "p-0 w-full mt-menu-folded": !isLargeScreen,
  });

  const innerWrapperClasses = cn(
    "min-h-screen flex flex-col overflow-auto",
    "w-full mx-auto",
    "scroll-auto",
    "font-[benton-sans] font-normal font-medium",
    "ms-overflow-style-none tw-no-scrollbar",
    {
      "h-full": disablePageScroll,
    }
  );

  return (
    <div>
      {isLargeScreen && <StatusBox disableDropdown={disableDropdown} />}
      <div className={wrapperClasses}>
        <Menu />
        <div className={innerWrapperClasses} id="container-fluid">
          {!isLargeScreen && <StatusBox disableDropdown={disableDropdown} />}
          {props.children}
        </div>
      </div>
      <Snackbar />
      <FreeFormJoyrideComponent />
    </div>
  );
};

export default Layout;
