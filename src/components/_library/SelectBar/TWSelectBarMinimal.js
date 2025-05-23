import SelectItemMinimal from "./TWSelectItemMinimal";
import { cn } from "../../../utils/cn";

const SelectBarMinimal = ({
  items = [],
  selectedItem,
  className = "",
  children,
  disabled = false,
  selectItem = () => {},
  ...props
}) => {
  const wrapperClasses = cn("p-0 w-full flex overflow-x-auto gap-2", className);

  return (
    <div className={wrapperClasses} {...props}>
      {items.map((item) => {
        const isSelected = selectedItem?.value === item?.value;
        return (
          <SelectItemMinimal
            key={item.value}
            item={item}
            isSelected={isSelected}
            selectItem={selectItem}
            disabled={disabled}
          />
        );
      })}
      {children}
    </div>
  );
};

export default SelectBarMinimal;
