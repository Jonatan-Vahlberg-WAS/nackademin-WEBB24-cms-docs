import { useEffect, useState } from "react"

import SelectItem from "./TWSelectItem"
import { cn } from "../../../utils/cn"



const SelectBar = ({
  items = [],
  selectedItem,
  className = "",
  children,
  disabled = false,
  selectItem = () => { },
  transparentItems = true,
  ...props
}) => {
  const [error, setError] = useState(false)

  const wrapperClasses = cn(
    'tw:!p-0 tw:!w-full tw:!border-b tw:!flex tw:!overflow-x-auto tw:!gap-2 mb-3',
    {
      'tw:!border-green-500': !error,
      'tw:!border-red-500': error,
    },
    className,
  )

  useEffect(() => {
    setError(items.some((item) => item.error))
  }, [items])
  
  return (
    <div className={wrapperClasses} {...props}>
      {items.map((item) => {
        const isSelected = selectedItem?.value === item?.value
        return (
          <SelectItem
            key={item.value}
            item={item}
            isSelected={isSelected}
            selectItem={selectItem}
            disabled={disabled}
            transparent={transparentItems}
          />
        )
      })}
      {children}
    </div>
  )
}

export default SelectBar