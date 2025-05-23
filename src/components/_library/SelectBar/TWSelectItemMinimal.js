
import T from "../Ui/TWTypography"
import { cn } from "../../../utils/cn"


const SelectItem = ({ 
  item,
  isSelected = false,
  selectItem = () => {},
  disabled = false,
}) => {
  const itemClasses = cn(
    'tw:!py-2 tw:!px-2 tw:!transition-colors tw:!duration-200 tw:!leading-none',
    {
      'tw:!border-b-4 tw:!border-green-600 tw:!text-black': isSelected,
      'tw:!border-b-4 tw:!border-red-600 tw:!text-red-600': isSelected && item.error,
      'tw:!cursor-not-allowed tw:!border-b tw:!border-green-400 tw:!text-green-400': disabled && isSelected,
      'tw:!text-gray-400 tw:!cursor-pointer': !disabled && !isSelected,
    }
  )
  return (
    <button className={itemClasses} onClick={() => selectItem(item)} disabled={disabled || isSelected}>
      <T.ButtonText>
        {item.text}
      </T.ButtonText>
    </button>
  )
}

export default SelectItem