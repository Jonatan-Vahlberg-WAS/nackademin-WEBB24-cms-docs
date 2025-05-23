import { cn } from "../../../../utils/cn";

const FileLoadingBar = ({ percent = 0, className = '', ...props }) => {
  const loadingBarClasses = cn(
    'tw:!relative tw:!w-full tw:!h-1 tw:!bg-gray-200 tw:!rounded-md tw:!overflow-hidden',
    className
  );

  const loadingIndicatorClasses = cn(
    'tw:!absolute tw:!top-0 tw:!left-0 tw:!h-full tw:!bg-green-600 tw:!transition-width tw:!duration-300'
  );

  return (
    <div className={loadingBarClasses} {...props}>
      <div
        className={loadingIndicatorClasses}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
};

export default FileLoadingBar;
