import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import Card from "../Card/TWCard";
import { cn } from "../../../utils/cn";

const CollapsibleCard = ({ title, children, preview = true }) => {
  const [isOpen, setIsOpen] = useState(!preview);

  const headerClasses = cn(
    "tw:w-full tw:flex tw:justify-between tw:border-none tw:items-center tw:px-4 tw:py-3 tw:bg-blue-500 tw:text-white",
    "tw:hover:bg-blue-600 tw:transition"
  );

  const contentClasses = cn(
    "tw-transition-all tw-duration-300 tw-overflow-hidden tw-relative",
    {
      "opacity-100": isOpen,
      "max-h-[150px] opacity-100": !isOpen && preview,
      "max-h-0 opacity-0": !preview,
    }
  );

  return (
    <Card className="tw-w-full tw-rounded-xl tw-bg-white tw-shadow-md tw-overflow-hidden tw-mb-8">
      <button
        className={headerClasses}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium mb-0">{title}s</h3>
        {isOpen ? (
          <FaChevronUp className="text-white" />
        ) : (
          <FaChevronDown className="text-white" />
        )}
      </button>
      <div
        className={`transition-all duration-300 ${
          isOpen
            ? "opacity-100"
            : preview
            ? "max-h-[150px] opacity-100"
            : "max-h-0 opacity-0"
        } relative overflow-hidden`}
      >
        <div className="p-4">{children}</div>

        {!isOpen && preview && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white pointer-events-none" />
        )}
      </div>
    </Card>
  );
};

export default CollapsibleCard;
