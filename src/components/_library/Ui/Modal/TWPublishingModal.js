import { PublishingProvider, PUBLISHING_RULES } from '../../../../contexts/Publishing'
import Modal from './TWModal'

//TODO: Decide if this component should be used or if publishing Provider should be used directly
const PublishingModal = ({
  children,
  isOpen = false,
  toggle = () => {},
  backdrop = 'static',
  centered = false,
  size = undefined,
  rule = PUBLISHING_RULES.GREATER_THAN,
  ...props
}) => {
  return (
    <PublishingProvider rule={rule}>
      <Modal isOpen={isOpen} toggle={toggle} backdrop={backdrop} centered={centered} size={size} {...props}>
        {children}
      </Modal>
    </PublishingProvider>
  )
}

export default PublishingModal
