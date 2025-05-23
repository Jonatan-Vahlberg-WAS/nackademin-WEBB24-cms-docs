import { cn } from "@/utils/cn";

const FileWrapper = ({
  iconSize,
  bg,
  className,
  onClick,
  setIsHovered = () => {},
  children,
}) => {
  const fileWrapperClasses = cn(
    "flex items-center gap-2",
    {
      "gap-0": iconSize === "xs",
      "gap-1": iconSize === "sm",
      [`bg-${bg}-100 bg-${bg}-50 rounded-sm p-2 cursor-pointer`]: bg,
      "cursor-default": !onClick,
      [`hover:!filter hover:!brightness-95`]: !!onClick,
    },
    className
  );

  return (
    <div
      className={fileWrapperClasses}
      onClick={onClick}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export default FileWrapper;
