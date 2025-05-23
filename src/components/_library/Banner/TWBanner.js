import { cn } from '../../../utils/cn';
import T from '../Ui/TWTypography';

const Banner = ({
  variant = 'default',
  title = '',
  subtitle = '',
  children,
  icon,
  ...props
}) => {

  icon = icon || getIcon(icon, variant);

  const bannerClasses = cn(
    'tw:!flex tw:!items-center tw:!justify-between tw:!mb-4 tw:!border-2 tw:!rounded-md tw:!py-2 tw:!px-4',
    'tw:!bg-gray-100 tw:!border-gray-300',
    {
      'tw:!bg-yellow-100 tw:!border-yellow-300': variant === 'warning',
      'tw:!bg-green-50 tw:!border-green-300': variant === 'success',
      'tw:!bg-blue-100 tw:!border-blue-300': variant === 'info',
      'tw:!bg-red-100 tw:!border-red-300': variant === 'danger',
    }
  );

  const contentClasses = cn('tw:!flex tw:!items-center tw:!mr-2');
  const iconWrapperClasses = cn(
    'tw:!flex tw:!items-center tw:!justify-center tw:!p-2 tw:!w-9 tw:!h-9 tw:!rounded-full tw:!mr-2',
    'tw:!bg-gray-500',
    {
      'tw:!bg-yellow-500': variant === 'warning',
      'tw:!bg-green-600': variant === 'success',
      'tw:!bg-blue-500': variant === 'info',
      'tw:!bg-red-500': variant === 'danger',
    }
  );
  const iconClasses = cn(
    'tw:!text-white tw:!text-lg tw-line-9',
    icon
  );
  const titleClasses = cn(
    'tw:!text-gray-700 tw:!text-sm tw:!mb-1',
    {
      'tw:!text-yellow-700': variant === 'warning',
      'tw:!text-green-700': variant === 'success',
      'tw:!text-blue-900': variant === 'info',
      'tw:!text-red-700': variant === 'danger',
    }
  );
  const subtitleClasses = cn(
    'tw:!text-sm tw:!mb-0',
    {
      'tw:!text-yellow-700': variant === 'warning',
      'tw:!text-green-900': variant === 'success',
      'tw:!text-blue-700': variant === 'info',
      'tw:!text-red-700': variant === 'danger',
    }
  );

  return (
    <div className={bannerClasses} {...props}>
      <div className={contentClasses}> 
        <div>
          <div className={iconWrapperClasses}>
            <i className={iconClasses}></i>
          </div>
        </div>
        <div>
          <T.Title className={titleClasses}>{title}</T.Title>
          <T.Text className={subtitleClasses}>{subtitle}</T.Text>
        </div>
      </div>
      {children}
    </div>
  );
};

const getIcon = (icon, variant) => {
  if (icon) return icon;
  switch (variant) {
    case 'warning':
      return 'fas fa-warning';
    case 'success':
      return 'fas fa-check';
    case 'info':
      return 'fas fa-info';
    case 'danger':
      return 'fas fa-exclamation-triangle';
    default:
      return 'fas fa-warning';
  }
}

export default Banner;
