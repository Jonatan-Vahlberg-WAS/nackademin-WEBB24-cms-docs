import { useEffect, useState } from "react";
import { cn } from '@/utils/cn';

const ScrollOverlay = ({ 
  containerRef, 
  theme = 'light', 
  size = "md",
  className,
  ...props 
}) => {
  const [showTopOverlay, setShowTopOverlay] = useState(false);
  const [showBottomOverlay, setShowBottomOverlay] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);

  const checkScroll = () => {
    if (!containerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    setShowTopOverlay(scrollTop > 0);
    setShowBottomOverlay(scrollTop + clientHeight < scrollHeight);
    setContainerHeight(clientHeight);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      // Initial check
      checkScroll();

      // Add resize observer to update on container size changes
      const resizeObserver = new ResizeObserver(checkScroll);
      resizeObserver.observe(container);
      
      return () => {
        container.removeEventListener("scroll", checkScroll);
        resizeObserver.disconnect();
      };
    }
  }, [containerRef]);

  const overlayContainerClasses = cn(
    'tw:!absolute tw:!top-0 tw:!left-0 tw:!right-2 tw:!bottom-0 tw:!w-auto tw:!pointer-events-none tw:!z-[1]',
    className
  );

  const topOverlayClasses = cn(
    'tw:!absolute tw:!top-0 tw:!left-0 tw:!right-0 tw:!transition-opacity tw:!duration-200 tw:!ease-in-out',
    {
      'tw:!bg-gradient-to-b tw:!from-gray-50 tw:!to-transparent': theme === 'gray',
      'tw:!bg-gradient-to-b tw:!from-white tw:!to-transparent': theme === 'light',
      'tw:!bg-gradient-to-b tw:!from-black tw:!to-transparent': theme === 'dark',
      'tw:!opacity-100': showTopOverlay,
      'tw:!opacity-0': !showTopOverlay,
      'tw:!h-25': showTopOverlay && size === 'lg',
      'tw:!h-12': showTopOverlay && size === 'md',
      'tw:!h-8': showTopOverlay && size === 'sm'
    }
  );

  const bottomOverlayClasses = cn(
    'tw:!absolute tw:!bottom-0 tw:!left-0 tw:!right-0 tw:!transition-opacity tw:!duration-200 tw:!ease-in-out',
    {
      'tw:!bg-gradient-to-t tw:!from-gray-50 tw:!to-transparent': theme === 'gray',
      'tw:!bg-gradient-to-t tw:!from-white tw:!to-transparent': theme === 'light',
      'tw:!bg-gradient-to-t tw:!from-black tw:!to-transparent': theme === 'dark',
      'tw:!opacity-100 tw:!h-12': showBottomOverlay,
      'tw:!opacity-0': !showBottomOverlay,
      'tw:!h-25': showBottomOverlay && size === 'lg',
      'tw:!h-12': showBottomOverlay && size === 'md',
      'tw:!h-8': showBottomOverlay && size === 'sm'
    }
  );

  return (
    <div 
      className={overlayContainerClasses} 
      style={{ height: containerHeight }}
      {...props}
    >
      <div 
        className={cn(topOverlayClasses)}
      />
      <div 
        className={cn(bottomOverlayClasses)}
      />
    </div>
  );
};

export default ScrollOverlay; 