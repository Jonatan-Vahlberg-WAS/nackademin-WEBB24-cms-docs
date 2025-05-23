import { cn } from "@/utils/cn";

const ConfirmBlockOverlay = ({ isVisible = false }) => {
  const overlayClasses = cn({
    "absolute inset-0 bg-black/50 overflow-hidden z-1 pointer-events-none":
      isVisible,
  });
  return <div className={overlayClasses} />;
};

export default ConfirmBlockOverlay;
