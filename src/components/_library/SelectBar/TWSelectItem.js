
import T from "../Ui/TWTypography"
import { cn } from "../../../utils/cn"


const SelectItem = ({ 
  item,
  isSelected = false,
  selectItem = () => {},
  disabled = false,
  transparent = false,
}) => {
  const itemClasses = cn(
    'tw:!rounded-t-[4px] tw:!py-2 tw:!px-2 tw:!transition-colors tw:!duration-200 tw:!leading-none tw:!border-b-0',
    {
      'tw:!bg-green-600 tw:!text-white': isSelected && !item.error && !disabled,
      'tw:!bg-red-600 tw:!text-white': isSelected && item.error && !disabled,
      'tw:!border-t tw:!border-x tw:!border-green-600 tw:!text-green-600 tw:hover:!border-green-800 tw:hover:!text-green-800': !isSelected && !item.error && !disabled,
      'tw:!border-t tw:!border-x tw:!border-red-600 tw:!text-red-600 tw:hover:!border-red-800 tw:hover:!text-red-800': !isSelected && item.error,
      'tw:!cursor-not-allowed tw:!bg-green-300 tw:!text-white': disabled && isSelected,
      'tw:!border-t tw:!border-x tw:!border-green-400 tw:!text-green-400': disabled && !isSelected,
      'tw:!bg-transparent': transparent && !isSelected && !item.error,
      'tw:!bg-white': !transparent && !isSelected && !item.error,
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