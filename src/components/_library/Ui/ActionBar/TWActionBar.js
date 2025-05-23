import { cn } from "../../../../utils/cn";

const ActionBar = ({ expand = false, className = "", children, ...props }) => {
  const actionBarClasses = cn(
    "p-2 px-4 flex justify-end items-center bg-gray-100 rounded-b-md gap-2 mt-[41px]",
    {
      "mt-[41px] -mx-6 -mb-6": expand,
    },
    className
  );

  return (
    <div className={actionBarClasses} {...props}>
      {children}
    </div>
  );
};

export default ActionBar;
