import Avatar from "@/components/Avatar/Avatar";
import { cn } from "@/utils/cn";


const ChatMessageAvatar = ({
  user,
  id,
  direction,
  color
}) => {

  const chatMessageAvatarClasses = cn(
    'tw:!absolute tw:!bottom-0',
    {
      'tw:!right-[-46px]': direction === 'end',
      'tw:!left-[-46px]': direction === 'start'
    }
  )
  return (
    <Avatar
      user={user}
      color={color}
      size="lg"
      indexing={`chat-message-avatar-${id}-${user.id}`}
      className={chatMessageAvatarClasses}
      style={{
        lineHeight: 0
      }}
    />
  )
};

export default ChatMessageAvatar;
