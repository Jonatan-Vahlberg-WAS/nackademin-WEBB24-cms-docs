import { cn } from "../../../../utils/cn";

const DrawerBody = ({ children, className, ...props }) => {
  const bodyClasses = cn(
    "relative flex flex-col p-6",
    "flex-1 fgrow-1",
    className
  );

  return (
    <div className={bodyClasses} {...props}>
      {children}
    </div>
  );
};

export default DrawerBody;
