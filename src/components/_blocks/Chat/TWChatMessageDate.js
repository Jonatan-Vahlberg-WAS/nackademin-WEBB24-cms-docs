import i18next from "i18next";
import moment from "moment";

import T from "@/library/Ui/TWTypography";
import { cn } from "@/utils/cn";


const ChatMessageDate = ({ message, direction, children, ...props }) => {
  const dateContent = `${moment(message.created_at).format(
    "D MMMM YYYY - [Kl] HH:mm"
  )}${
    message.submitted_outside_office_hours
      ? i18next.t("tasks.detail.chat.sentOutsideOfficeHours")
      : ""
  }`;

  const chatMessageDateClasses = cn(
    "tw:!w-[calc(100%-38px)] tw:!flex tw:!items-center tw:!justify-end",
    {
      "tw:!text-red-900": message.submitted_outside_office_hours,
      "tw:!justify-start": direction === "start",
      "tw:!justify-end": direction === "end",
    }
  );

  return (
    <T.Timestamp
      className={chatMessageDateClasses}
      {...props}
    >
      {dateContent}
      {children}
    </T.Timestamp>
  );
}

export default ChatMessageDate;