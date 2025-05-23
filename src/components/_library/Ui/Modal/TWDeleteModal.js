
import i18next from "i18next";

import Card from "../../Card/TWCard";
import Modal from "./TWModal";
import T from "../TWTypography";
import { TextFormatter } from "../TWTextFormatter";
import FormError from "../../Form/TWFormError";
import StandardActionBar from "../ActionBar/TWStandardActionBar";

const DeleteModal = ({
  isOpen = false,
  toggle = () => {},
  title = "",
  text = "",
  onAccept = () => {},
  onDecline = () => {},
  disabled = false,
  loading = false,
  backdrop = "static",
  error = null,
  highlights = [],
  buttonTexts = {
    abort: i18next.t("general.actions.cancel"),
    remove: i18next.t("general.actions.remove"),
  },
  ...props
}) => {

  const _toggle = () => {
    toggle()
    onDecline()
  }

  return (
    <Modal
      isOpen={isOpen}
      toggle={_toggle}
      centered
      backdrop={backdrop}
      {...props}
    >
      <Card modal>
        <T.Title>{title}</T.Title>
        <TextFormatter
          text={text}
          highlights={highlights}
        >
        </TextFormatter>
        <FormError touched={true} error={error} />
        <StandardActionBar
          className="mt-2"
          cancelLabel={buttonTexts.abort}
          saveLabel={buttonTexts.remove}
          saveButtonType="button"
          saveProps={{ variant: "danger" }}
          onCancel={_toggle}
          onSave={onAccept}
        />
      </Card>
    </Modal>
  )
}

export default DeleteModal
