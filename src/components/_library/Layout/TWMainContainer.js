import { cn } from "../../../utils/cn";

const MainContainer = ({ children, className = "", ...props }) => {
  return (
    <div
      className={cn(
        "w-full h-full flex-1 relative ml-auto mr-auto",
        "lg:!max-w-page lg:!py-12 lg:!px-8 lg:flex-1 lg:w-[calc(100%-4rem)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default MainContainer;
