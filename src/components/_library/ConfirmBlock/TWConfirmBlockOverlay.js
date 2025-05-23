import { cn } from '@/utils/cn'

const ConfirmBlockOverlay = ({ isVisible = false }) => {
  const overlayClasses = cn({
    'tw:!absolute tw:!inset-0 tw:!bg-black/50 tw:!overflow-hidden tw:!z-1 tw:!pointer-events-none': isVisible
  })
  return <div className={overlayClasses} />
}

export default ConfirmBlockOverlay
