import React from 'react'

import { useUser } from '@/contexts/user/user'
import T from '@/library/Ui/TWTypography'
import { cn } from '@/utils/cn'
import ChatMessageAttachments from './TWChatMessageAttachments'
import ChatMessageAvatar from './TWChatMessageAvatar'
import ChatMessageDate from './TWChatMessageDate'
import ChatMessageReadBy from './TWChatMessageReadBy'
import ChatMessageStaffActions from './TWChatMessageStaffActions'

const getColor = (isAuthor, authorIsStaff) => {
  if (isAuthor) return 'blue'
  if (authorIsStaff) return 'green'
  return 'gray'
}

const getDirection = (userIsStaff, authorIsStaff) => {
  if (userIsStaff && authorIsStaff) return 'end'
  if (!userIsStaff && !authorIsStaff) return 'end'
  return 'start'
}

const ChatMessage = ({
  message = { title: null, content: '', created_at: Date().toString() },
  loading = false,
  color,
  direction,
  showReadBy = false,
  showActions = false,
  showAvatar = true
}) => {
  const { userInfo: user } = useUser()
  const isStaff = user?.is_staff

  const author = message?.author_object
  const isAuthor = user?.id === author?.id

  const authorIsStaff = author?.is_staff
  color = color || getColor(isAuthor, authorIsStaff)
  direction = direction || getDirection(isStaff, authorIsStaff)

  const wrapperClasses = cn('tw:!flex tw:!flex-col tw:!mb-4 tw:!relative tw:!w-full', {
    'tw:!items-start': direction === 'start',
    'tw:!items-end': direction === 'end',
    'tw:!pl-11.5': direction === 'end',
    'tw:!pr-11.5': direction === 'start'
  })

  const cardClasses = cn('tw:!relative tw:!p-3 tw:!max-w-[80%] tw:!rounded tw:!border-none', {
    'tw:!bg-blue-100': color === 'blue',
    'tw:!bg-green-100': color === 'green',
    'tw:!bg-gray-50': color === 'gray',
    'tw:!mr-11.5': author && direction === 'end',
    'tw:!ml-11.5': author && direction === 'start',
    'tw:!mr-0 tw:!ml-0': !author || !showAvatar
  })

  const textClasses = cn('tw:!text-base tw:!leading-[19px] tw:!mb-0 tw:!break-words tw-chat-message tw:!font-medium', {
    'tw:!text-blue-900': color === 'blue',
    'tw:!text-green-900': color === 'green',
    'tw:!text-gray-900': color === 'gray'
  })

  const titleClasses = cn(textClasses, 'tw:!mb-1')

  return (
    <div className={wrapperClasses}>
      {!loading && (
        <>
          <ChatMessageDate message={message} direction={direction} />
          {message.content !== '' && (
            <div className={cardClasses}>
              {message.title && <T.Title className={titleClasses}>{message.title}</T.Title>}
              <div className={textClasses} dangerouslySetInnerHTML={{ __html: message.content }} />
              {author && showAvatar && <ChatMessageAvatar user={author} id={message.id} direction={direction} color={color} />}
            </div>
          )}
          <ChatMessageAttachments direction={direction} attachments={message.attachments} noPadding={!showAvatar} />
          <ChatMessageReadBy message={message} showReadBy={showReadBy} direction={direction} noPadding={!showAvatar} />
          {showActions && isStaff && isAuthor && <ChatMessageStaffActions message={message} direction={direction} noPadding={!showAvatar} />}
        </>
      )}
    </div>
  )
}

export default ChatMessage
