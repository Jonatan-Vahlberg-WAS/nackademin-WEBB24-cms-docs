import { cn } from "@/utils/cn";
import ScrollWrapper from "@/components/Modal/ScrollWrapper";
import DefaultDrawerHeader from "./TWDrawerHeader";
import { useState } from "react";

const Drawer = ({
  drawerStorageKey = "drawer",
  isOpen = false,
  allowScroll = false,
  actions = {},
  children,
  DrawerHeader,
  DrawerFooter,
  className,
  color = "white",
  toggle = () => {},
  ActionBar = () => null,
  ...props
}) => {
  DrawerHeader = DrawerHeader || DefaultDrawerHeader;

  const [forceExpanded, setForceExpanded] = useState(
    localStorage.getItem(drawerStorageKey) === "true" || false
  );

  const overlayClasses = cn(
    "fixed inset-0 z-[999] cursor-pointer",
    {
      "bg-black/50 visible opacity-100": isOpen,
      "bg-transparent invisible opacity-0": !isOpen,
    },
    "transition-all duration-300"
  );

  const drawerClasses = cn(
    "absolute flex flex-col top-0 right-0 bottom-0 z-[1000] bg-white h-screen cursor-default overflow-hidden",
    "transition-[width] duration-250 ease-in-out",
    {
      "w-0": !isOpen,
      "w-full xl:!w-main-content": isOpen && !forceExpanded,
      "w-full xl:!w-full": isOpen && forceExpanded,
      "bg-gray-50": color === "gray",
    },
    className
  );

  const drawerBodyClasses = cn(
    "px-6  flex flex-col flex-1 overflow-y-auto overflow-x-hidden box-border"
  );

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
              setForceExpanded(value);
              localStorage.setItem(drawerStorageKey, JSON.stringify(value));
            }}
          />
          <div className={drawerBodyClasses}>{children}</div>
          <ActionBar {...actions} />
          {DrawerFooter && <DrawerFooter />}
        </div>
      </div>
    </ScrollWrapper>
  );
};

export default Drawer;
