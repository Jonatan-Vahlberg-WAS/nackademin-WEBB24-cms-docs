import { Modal as StrapModal } from 'reactstrap'
import ScrollWrapper from '@/components/Modal/ScrollWrapper'

const Modal = ({
  isOpen = false,
  size = undefined,
  centered = false,
  backdrop = undefined,
  children,
  allowScroll = false,
  toggle = () => {},
  ...props
}) => {

  return (
    <ScrollWrapper isOpen={isOpen} allowScroll={true} prefix='modal'>
      <StrapModal isOpen={isOpen} size={size} toggle={toggle} centered={centered} backdrop={backdrop} {...props}>
        {children}
      </StrapModal>
    </ScrollWrapper>
  )
}

export default Modal
