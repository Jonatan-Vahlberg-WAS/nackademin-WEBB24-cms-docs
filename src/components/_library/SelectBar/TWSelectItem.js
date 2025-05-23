import T from "../Ui/TWTypography";
import { cn } from "../../../utils/cn";

const SelectItem = ({
  item,
  isSelected = false,
  selectItem = () => {},
  disabled = false,
  transparent = false,
}) => {
  const itemClasses = cn(
    "rounded-t-[4px] py-2 px-2 transition-colors duration-200 leading-none border-b-0",
    {
      "bg-green-600 text-white": isSelected && !item.error && !disabled,
      "bg-red-600 text-white": isSelected && item.error && !disabled,
      "border-t border-x border-green-600 text-green-600 hover:!border-green-800 hover:!text-green-800":
        !isSelected && !item.error && !disabled,
      "border-t border-x border-red-600 text-red-600 hover:!border-red-800 hover:!text-red-800":
        !isSelected && item.error,
      "cursor-not-allowed bg-green-300 text-white": disabled && isSelected,
      "border-t border-x border-green-400 text-green-400":
        disabled && !isSelected,
      "bg-transparent": transparent && !isSelected && !item.error,
      "bg-white": !transparent && !isSelected && !item.error,
    }
  );
  return (
    <button
      className={itemClasses}
      onClick={() => selectItem(item)}
      disabled={disabled || isSelected}
    >
      <T.ButtonText>{item.text}</T.ButtonText>
    </button>
  );
};

export default SelectItem;
