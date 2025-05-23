import { cn } from '../../../utils/cn'

const MainContainer = ({ children, className = '', ...props }) => {
  return (
    <div
      className={cn(
        'tw:!w-full tw:!h-full tw:!flex-1 tw:!relative tw:!ml-auto tw:!mr-auto',
        'tw:lg:!max-w-page tw:lg:!py-12 tw:lg:!px-8 tw:lg:flex-1 tw:lg:w-[calc(100%-4rem)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default MainContainer
