import T from "../Ui/TWTypography";
import { cn } from "../../../utils/cn";

const SelectItem = ({
  item,
  isSelected = false,
  selectItem = () => {},
  disabled = false,
}) => {
  const itemClasses = cn(
    "py-2 px-2 transition-colors duration-200 leading-none",
    {
      "border-b-4 border-green-600 text-black": isSelected,
      "border-b-4 border-red-600 text-red-600": isSelected && item.error,
      "cursor-not-allowed border-b border-green-400 text-green-400":
        disabled && isSelected,
      "text-gray-400 cursor-pointer": !disabled && !isSelected,
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
