import T from '@/library/Ui/TWTypography'

import { cn } from '@/utils/cn'

const RestrictedAccessWrapper = ({ 
  showContent = false,
  showBackground = true,
  showBorder = true,
  note = '', 
  noteExtra = '', 
  extraNotes = [], 
  className,
  children
}) => {
  const wrapperClasses = cn(
    'tw:!p-4 tw:!rounded-md',
    {
      'tw:!bg-red-100': showBackground,
      'tw:!border tw:!border-dashed tw:!border-2 tw:!border-red-300': showBorder,
    },
    className
  )

  const noteClasses = cn('tw:!text-sm tw:!text-red-500 tw:!mb-0')
  if (!showContent) return null
  return (
    <div className={wrapperClasses}>
      <div className='tw:!mb-3'>

      {note && <T.Text className={`${noteClasses} tw:!mb-0`}>{note}</T.Text>}
      {noteExtra && (
        <T.Text className={noteClasses}>
          <small>{noteExtra}</small>
        </T.Text>
      )}
      {extraNotes.map((note, index) => (
        <T.Text className={cn(noteClasses, 'tw:!text-red-700')} key={index}>
          <small>
            {Array.from({ length: index + 1 }, () => '*').join('')}
            {note}
          </small>
        </T.Text>
      ))}
      </div>
      {children}
    </div>
  )
}

export default RestrictedAccessWrapper
