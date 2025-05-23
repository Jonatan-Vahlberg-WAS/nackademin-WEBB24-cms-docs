import { cn } from "@/utils/cn";
import { useState } from "react";

const Dropdown = ({ children, title, icon, openInitially = false }) => {
  const [isOpen, setIsOpen] = useState(openInitially);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const wrapperClasses = cn(
    "flex flex-col",
    "rounded-sm border border-gray-100"
  );

  const headerClasses = cn(
    "flex flex-row justify-between items-center cursor-pointer",
    "px-4 py-2",
    "bg-gray-50 font-bold text-gray-800"
  );

  const headerSideClasses = cn("flex flex-row items-center");

  const headerIconClasses = cn(icon, "mr-2");

  const chevronClasses = cn("fa", {
    "fa-chevron-up": isOpen,
    "fa-chevron-down": !isOpen,
  });

  const bodyClasses = cn("transition-all duration-300 bg-white", {
    "visible h-auto p-4": isOpen,
    "hidden h-0": !isOpen,
  });

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
  );
};

export default Dropdown;
