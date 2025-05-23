import { cn } from "@/utils/cn"


const LanguageContainer = ({
  children,
  isSelected,
  index,
  className,
  softHidden = false,
}) => {
  const languageContainerClasses = cn(
    {
      "tw:!h-0 tw:!opacity-0 tw:!invisible tw:!hidden": !isSelected,
      "tw:!block": !isSelected && softHidden,
      [`tw:!mt-${index * -23}px`]: !!index,
      className,
    }
  )
  return (
    <div className={languageContainerClasses}>{children}</div>
  )
}

export default LanguageContainer