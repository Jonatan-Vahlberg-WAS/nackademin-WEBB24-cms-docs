import i18next from 'i18next'
import StaffOnlyWrapper from './StaffOnlyWrapper'

const DepricatedWrapper = ({ 
  children, 
  extraNotes = [], 
  showBackground = true,
  showBorder = true,
  ...props 
}) => {
  return (
    <StaffOnlyWrapper
      note={i18next.t('general.unavailable.deprecated.title')}
      noteExtra={i18next.t('general.unavailable.deprecated.text')}
      extraNotes={extraNotes}
      showBackground={showBackground}
      showBorder={showBorder}
      {...props}
    >
      {children}
    </StaffOnlyWrapper>
  )
}

export default DepricatedWrapper
