import { cn } from '@/utils/cn'

export const badgeProps = {
  variant: 'info',
  shade: 'normal',
  size: 'xs',
  border: 'none',
  className: '',
  children: '',
  background: '',
}

const Badge = (_props = badgeProps) => {
  const { variant, shade, size, border, className, children, background, ...props } = {
    ...badgeProps,
    ..._props
  }
  const badgeClasses = cn(
    'tw:!px-2.5 tw:!py-1 tw:!rounded-full tw:!font-medium tw:!leading-none tw:!box-border',
    {
      'tw:!bg-gray-200 tw:!text-gray-900': variant === 'default',
      'tw:!bg-blue-400 tw:!text-white': variant === 'info',
      'tw:!bg-yellow-300 tw:!text-yellow-900': variant === 'warning',
      'tw:!bg-green-600 tw:!text-white': variant === 'success',
      'tw:!bg-red-200 tw:!text-red-900': variant === 'danger',
      'tw:!text-xs tw:!px-3 tw:!py-1': size === 'xs',
      'tw:!text-sm tw:!px-4 tw:!py-2': size === 'sm',
      'tw:!bg-gray-50 tw:!text-gray-700': shade === 'light' && variant === 'default',
      'tw:!bg-gray-100 tw:!text-gray-700': background === 'gray' && shade === 'light' && variant === 'default',
      'tw:!bg-blue-100 tw:!text-blue-700': shade === 'light' && variant === 'info',
      'tw:!bg-yellow-100 tw:!text-yellow-700': shade === 'light' && variant === 'warning',
      'tw:!bg-green-50 tw:!text-green-700': shade === 'light' && variant === 'success',
      'tw:!bg-red-50 tw:!text-red-700': shade === 'light' && variant === 'danger',
      'tw:!border': border !== 'none',
      'tw:!border-gray-400': border && variant === 'default',
      'tw:!border-blue-400': border && variant === 'info',
      'tw:!border-yellow-300': border && variant === 'warning',
      'tw:!border-green-600': border && variant === 'success',
      'tw:!border-red-200': border && variant === 'danger',
      'tw:!border-gray-400/25': border === 'thin',
      'tw:!border-blue-400/25': border === 'thin' && variant === 'info',
      'tw:!border-yellow-300/25': border === 'thin' && variant === 'warning',
      'tw:!border-green-600/25': border === 'thin' && variant === 'success',
      'tw:!border-red-200/25': border === 'thin' && variant === 'danger',
    },
    className || ''
  )

  const badgeWrapperClasses = cn({
    'tw:!h-6.5': size === 'xs',
    'tw:!h-9.5': size === 'sm',
  })

  return (
    <div className={badgeWrapperClasses}>
      <span pill color='primary' className={badgeClasses} {...props}>
        {children}
      </span>
    </div>
  )
}

export default Badge
