import { useEffect, useState } from "react";

import SelectItem from "./TWSelectItem";
import { cn } from "../../../utils/cn";

const SelectBar = ({
  items = [],
  selectedItem,
  className = "",
  children,
  disabled = false,
  selectItem = () => {},
  transparentItems = true,
  ...props
}) => {
  const [error, setError] = useState(false);

  const wrapperClasses = cn(
    "p-0 w-full border-b flex overflow-x-auto gap-2 mb-3",
    {
      "border-green-500": !error,
      "border-red-500": error,
    },
    className
  );

  useEffect(() => {
    setError(items.some((item) => item.error));
  }, [items]);

  return (
    <div className={wrapperClasses} {...props}>
      {items.map((item) => {
        const isSelected = selectedItem?.value === item?.value;
        return (
          <SelectItem
            key={item.value}
            item={item}
            isSelected={isSelected}
            selectItem={selectItem}
            disabled={disabled}
            transparent={transparentItems}
          />
        );
      })}
      {children}
    </div>
  );
};

export default SelectBar;
