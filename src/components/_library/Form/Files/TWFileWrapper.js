import { cn } from "@/utils/cn"


const FileWrapper = ({ 
  iconSize,
  bg,
  className,
  onClick,
  setIsHovered = () => {},
  children,
 }) => {
  const fileWrapperClasses = cn(
    'tw:!flex tw:!items-center tw:!gap-2',
    {
      'tw:!gap-0': iconSize === 'xs',
      'tw:!gap-1': iconSize === 'sm',
      [`tw:!bg-${bg}-100 tw:!bg-${bg}-50 tw:!rounded-sm tw:!p-2 tw:!cursor-pointer`]: bg,
      'tw:!cursor-default': !onClick,
      [`tw:hover:!filter tw:hover:!brightness-95`]: !!onClick
    },
    className
  )

  return (
    <div
      className={fileWrapperClasses}
      onClick={onClick}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  )
}

export default FileWrapper

