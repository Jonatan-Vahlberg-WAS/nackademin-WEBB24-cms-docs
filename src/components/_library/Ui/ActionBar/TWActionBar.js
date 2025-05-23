import { cn } from "../../../../utils/cn";

const ActionBar = ({ expand = false, className = '', children, ...props }) => {
  const actionBarClasses = cn(
    'tw:!p-2 tw:!px-4 tw:!flex tw:!justify-end tw:!items-center tw:!bg-gray-100 tw:!rounded-b-md tw:!gap-2 tw:!mt-[41px]',
    {
      'tw:!mt-[41px] tw:!-mx-6 tw:!-mb-6': expand,
    },
    className
  );

  return <div className={actionBarClasses} {...props}>
    {children}
  </div>
};

export default ActionBar;