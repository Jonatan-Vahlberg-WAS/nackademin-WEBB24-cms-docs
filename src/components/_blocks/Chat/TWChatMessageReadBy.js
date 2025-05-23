import i18next from "i18next";
import moment from "moment";

import { cn } from "@/utils/cn";
import T from "@/library/Ui/TWTypography";

const ChatMessageReadBy = ({ message, showReadBy = false }) => {
  const firstReadBy = message?.first_read_by;
  const firstReadAt = getFromTimestamp(message?.first_read_at);

  const firstReadByMessage = firstReadBy
    ? i18next.t("staff.tasks.drawer.chat.comments.readBy", {
        readBy: `${firstReadBy.first_name} ${firstReadBy.last_name}`,
        readAt: firstReadAt,
      })
    : i18next.t("staff.tasks.drawer.chat.comments.notRead");
  if (!showReadBy) return null;

  const readByContainerClasses = cn(
    'tw:!py-0 tw:!px-11.5 tw:!text-sm tw:!text-gray-500 tw:!mt-2'
  )
  return (
    <div className={readByContainerClasses}>
      <T.Timestamp className="tw:!mb-0">
        <small dangerouslySetInnerHTML={{ __html: firstReadByMessage }}></small>
      </T.Timestamp>
    </div>
  );
};

const getFromTimestamp = (timestamp) => {
  if (moment().diff(moment(timestamp), "days") > 1) {
    return moment(timestamp).format("YYYY-MM-DD HH:mm");
  }
  return moment(timestamp).fromNow();
};

export default ChatMessageReadBy;
