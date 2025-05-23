import i18next from "i18next";

import IconTooltip from "@/library/Ui/TWIconTooltip";

import { cn } from "@/utils/cn";
import { useUser } from "@/contexts/user/user";

const i18nPrefix = "menu.lock";

const MenuItemLock = ({
  hasOrganisationAccess = true,
  isStaffOnly = false,
}) => {

  const user = useUser();

  const menuItemOrganisationLockClasses = cn(
    "tw:!absolute",
    "tw:!right-[-1.2rem]",
    "tw:!top-[50%]",
    "tw:!transform",
    "tw:!translate-y-[-50%]",
    "tw:!text-gray-300",
    "tw:!cursor-pointer",
    "tw:!transition-colors",
    "tw:!duration-200",
  )

  const iconTooltipClasses = cn(
    {
      "tw:!text-gray-300 tw:hover:!text-gray-500": hasOrganisationAccess && !isStaffOnly, 
      "tw:!text-red-500 tw:hover:!text-red-700": isStaffOnly,
    }
  )

  const message = isStaffOnly ? i18next.t(`${i18nPrefix}.staffMessage`) : i18next.t(`${i18nPrefix}.organisationMessage`);
  
  //TODO: 2025-04-15 - remove check for staff once we have a proper organisation access
  if (!user.gatekeeper.isStaff) {
    return null;
  }

  return (
    <span className={menuItemOrganisationLockClasses}>
      <IconTooltip
        icon="fa fa-lock"
        message={message}
        classname={iconTooltipClasses}
      />
    </span>
  )
}

export default MenuItemLock;