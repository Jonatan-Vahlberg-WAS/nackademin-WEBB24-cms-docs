import React, { useState, useEffect } from "react";
import { Tooltip as TooltipStrap } from "reactstrap";
import { cn } from "../../../utils/cn";

const IconTooltip = ({ 
  icon = "fa fa-info-circle",
  variant = "default", 
  classname = "", 
  message = "",
  tooltipProps = {},
  ...props
}) => {
  const [tooltipId, setTooltipId] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    setTooltipId(`TOOLTIP_ID_${Math.floor(Math.random() * 1000)}`);
  }, []);

  const iconClasses = cn(
    'tw:!cursor-pointer tw:!transition tw:!duration-300 tw:!ease-in-out tw:!text-sm',
    {
      "tw:!text-red-500 tw:hover:!text-red-700": variant === "danger",
      "tw:!text-blue-500 tw:hover:!text-blue-700": variant === "info",
      "tw:!text-yellow-500 tw:hover:!text-yellow-700": variant === "warning",
      "tw:!text-green-600 tw:hover:!text-green-800": variant === "success",
      "tw:!text-gray-500 tw:hover:!text-gray-700": variant !== "danger" && variant !== "info" && variant !== "warning" && variant !== "success"
    },
    icon,
    classname
  )

  if (!tooltipId) return null;
  return (
    <>
      <i
        id={tooltipId}
        className={iconClasses}
      ></i>
      <TooltipStrap
        className="custom-tooltip__popover"
        placement="right"
        isOpen={isOpen}
        toggle={toggle}
        target={tooltipId}
        {...tooltipProps}
      >
        {message}
      </TooltipStrap>
    </>
  );
};

export default IconTooltip;
