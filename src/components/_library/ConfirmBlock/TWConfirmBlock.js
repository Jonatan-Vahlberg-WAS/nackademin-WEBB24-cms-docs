import ConfirmBlockOverlay from "./TWConfirmBlockOverlay";
import Card from "../Card/TWCard";
import { cn } from "@/utils/cn";
import ActionBar from "../Ui/ActionBar/TWActionBar";
import i18next from "i18next";
import Button from "../Button/TWButton";

const ConfirmBlock = ({
  isVisible = false,
  withOverlay = true,
  position = "bottom-right",
  variant = "info",
  confirmText = "",
  children,
  loading = false,
  disabled = false,
  onConfirm = () => {},
  onCancel = () => {},
}) => {
  const wrapperClasses = cn("absolute", {
    "hidden opacity-0 pointer-events-none invisible": !isVisible,
    "visible opacity-100 pointer-events-auto": isVisible,
    "bottom-0 translate-y-[calc(100%+10px)]": position.includes("bottom"),
    "top-0 -translate-y-[calc(100%+10px)]": position.includes("top"),
    "right-0": position.includes("right"),
    "left-0": position.includes("left"),
  });

  confirmText =
    confirmText || variant === "danger"
      ? i18next.t("general.actions.delete")
      : variant === "success"
      ? i18next.t("general.actions.save")
      : i18next.t("general.actions.next");

  return (
    <>
      {withOverlay && <ConfirmBlockOverlay isVisible={isVisible} />}
      <Card className={wrapperClasses} modal>
        {children}
        <ActionBar expand>
          <Button size="sm" onClick={onCancel} disabled={loading || disabled}>
            {i18next.t("general.actions.cancel")}
          </Button>
          <Button
            variant={variant}
            size="sm"
            onClick={onConfirm}
            disabled={loading || disabled}
            loading={loading}
          >
            {confirmText}
          </Button>
        </ActionBar>
      </Card>
    </>
  );
};

export default ConfirmBlock;
