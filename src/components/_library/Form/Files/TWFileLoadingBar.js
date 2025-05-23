import { cn } from "../../../../utils/cn";

const FileLoadingBar = ({ percent = 0, className = "", ...props }) => {
  const loadingBarClasses = cn(
    "relative w-full h-1 bg-gray-200 rounded-md overflow-hidden",
    className
  );

  const loadingIndicatorClasses = cn(
    "absolute top-0 left-0 h-full bg-green-600 transition-width duration-300"
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
