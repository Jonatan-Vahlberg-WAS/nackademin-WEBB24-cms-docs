import { FaPen, FaTrash } from 'react-icons/fa6'
import DeletionModal from '@/components/Modal/DeletionModal'
import { useState } from 'react'
import i18next from 'i18next'
import { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useStaffTask } from '@/contexts/staff/tasks'
import { cn } from '@/utils/cn'
import Button from '@/library/Button/TWButton'
import { useStaffTaskChat } from '@/contexts/staff/taskChat'

const i18nPrefix = 'staff.tasks.drawer.chat.comments'

const ChatMessageStaffActions = ({ message, direction = 'end', noPadding = false }) => {
  const staff = useStaffTask()
  const staffTask = useStaffTaskChat()
  const {
    selectedComment,
    actions: {
      setSelectedComment
    }
  } = staffTask

  const isSelectedComment = selectedComment && selectedComment.id === message.id

  const [deletionModalIsOpen, setDeletionModalIsOpen] = useState(false)
  const toggleDeletionModal = () => setDeletionModalIsOpen(!deletionModalIsOpen)

  useEffect(() => {
    if (!message) {
      setDeletionModalIsOpen(false)
    }
  }, [message])

  const handleDelete = () => {
    staffTask.actions.deleteComment(message, () => {
      toggleDeletionModal()
    })
  }
  if (staff.status.isCompleted || !staff.status.isStarted) {
    return null
  }

  const staffActionsWrapperClasses = cn(
    'tw:!flex tw:!flex-row tw:!items-center tw:!gap-2 tw:!px-11.5 tw:!py-2 tw:!text-sm tw:!text-gray-500',
    {
      'tw:!justify-end tw:!pr-11.5': direction === 'end',
      'tw:!justify-start tw:!pl-11.5': direction === 'start',
      'tw:!pr-0 tw:!pl-0': noPadding
    }
  )
  return (
    <div className={staffActionsWrapperClasses}>
      {!staffTask.selectedComment && (
        <Button size='xs' outline aspect='square' onClick={() => setSelectedComment(message)}>
          <FaPen />
        </Button>
      )}
      {staffTask.selectedComment && isSelectedComment && (
        <Button size='xs' outline variant='danger' aspect='square' onClick={() => setSelectedComment(null)}>
          <FaTimes />
        </Button>
      )}
      {!selectedComment && (
        <Button size='xs' outline variant='danger' aspect='square' onClick={toggleDeletionModal}>
          <FaTrash />
        </Button>
      )}
      <DeletionModal
        isOpen={deletionModalIsOpen}
        toggle={toggleDeletionModal}
        onAccept={handleDelete}
        onDecline={toggleDeletionModal}
        title={i18next.t(`${i18nPrefix}.deleteModal.title`)}
        text={i18next.t(`${i18nPrefix}.deleteModal.text`)}
      />
    </div>
  )
}

export default ChatMessageStaffActions
