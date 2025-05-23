import { cn } from "@/utils/cn";
import MenuItemLock from "./TWMenuItemLock";
import { useUser } from "@/contexts/user/user";

const MenuItemTitle = ({
  children,
  route,
  ...props
}) => {
  const user = useUser();
  const isStaffOnly = route?.isStaffOnly;
  const hasOrganisationAccess = route?.hasOrganisationAccess;
  const menuItemTitleClasses = cn(
    'tw:!relative',
    {
      "tw:!text-gray-200": user?.gatekeeper.isStaff && (!hasOrganisationAccess || isStaffOnly),
    }
  )

  return (
    <span className={menuItemTitleClasses} {...props}>
      {children}
      {!route?.hideLock && ((!hasOrganisationAccess || isStaffOnly) && (
        <MenuItemLock
          hasOrganisationAccess={hasOrganisationAccess}
          isStaffOnly={isStaffOnly}
        />
      ))}
    </span>
  )
}

export default MenuItemTitle;