import { cn } from "../../../../utils/cn";
import ActionBar from "./TWActionBar";
import Button from "../../Button/TWButton";
import i18next from "i18next";

export const LeftActionBarWrapper = ({
  children,
  className = "",
  ...props
}) => {
  const leftWrapperClasses = cn("flex gap-2 flex-1", className);
  return (
    <div className={leftWrapperClasses} {...props}>
      {children}
    </div>
  );
};

export const RightActionBarWrapper = ({
  children,
  className = "",
  ...props
}) => {
  const rightWrapperClasses = cn("flex gap-2", className);
  return (
    <div className={rightWrapperClasses} {...props}>
      {children}
    </div>
  );
};

const StandardActionBar = ({
  loading = false,
  disabled,
  expand = true,
  className = "",

  renderCancelButton = true,
  cancelLabel = i18next.t("general.actions.cancel"),
  cancelDisabled = false,
  cancelProps = {},
  onCancel = () => {},

  renderSaveButton = true,
  saveLabel = i18next.t("general.actions.save"),
  saveButtonType = "submit",
  saveProps = {},
  onSave = () => {},

  renderDeleteButton = false,
  deleteLabel = i18next.t("general.actions.delete"),
  deleteDisabled = false,
  deleteProps = {},
  onDelete = () => {},
}) => {
  disabled = typeof disabled === "boolean" ? disabled : loading;

  return (
    <ActionBar expand={expand} className={className}>
      {renderDeleteButton && (
        <LeftActionBarWrapper>
          <Button
            variant="danger"
            disabled={disabled || deleteDisabled}
            type="button"
            onClick={onDelete}
            {...deleteProps}
          >
            {deleteLabel}
          </Button>
        </LeftActionBarWrapper>
      )}
      <RightActionBarWrapper>
        {renderCancelButton && (
          <Button
            type="button"
            onClick={onCancel}
            disabled={loading || cancelDisabled}
            {...cancelProps}
          >
            {cancelLabel}
          </Button>
        )}
        {renderSaveButton && (
          <Button
            variant="success"
            type={saveButtonType}
            disabled={disabled}
            loading={loading}
            onClick={onSave}
            {...saveProps}
          >
            {saveLabel}
          </Button>
        )}
      </RightActionBarWrapper>
    </ActionBar>
  );
};

export default StandardActionBar;
