import Button from "../../Button/TWButton";

const FileActions = ({
  file,
  fileName,
  error = false,
  isUploaded = false,
  isCorrecting = false,
  isGhost = false,
  isDeletable = true,
  isEditable = true,
  isEditing = false,
  disabled = false,
  onDelete = () => {},
  onEdit = () => {},
  onExchange = () => {},
  toggleEdit = () => {},
}) => {
  if (!file || isGhost) return null;

  const stdButtonProps = {
    type: "button",
    size: "xs",
    outline: true,
    aspect: "square",
    className: "w-6",
    disabled,
  };

  const preventBubble = (e, func) => {
    e.stopPropagation();
    func();
  };

  return (
    <div className="flex items-center gap-2">
      {isUploaded && isEditable && isCorrecting && !isEditing && (
        <Button
          {...stdButtonProps}
          onClick={(e) => preventBubble(e, onExchange)}
        >
          <i className="fas fa-exchange-alt" />
        </Button>
      )}
      {isUploaded && isDeletable && !isEditing && (
        <Button
          {...stdButtonProps}
          variant="danger"
          onClick={(e) => preventBubble(e, onDelete)}
        >
          <i className="fa fa-trash" />
        </Button>
      )}
      {(!isUploaded || error) && !isEditing && (
        <Button
          {...stdButtonProps}
          variant="danger"
          onClick={(e) => preventBubble(e, onDelete)}
        >
          <i className="fa fa-times" />
        </Button>
      )}
      {isUploaded && isEditable && !isCorrecting && !isEditing && (
        <Button
          {...stdButtonProps}
          onClick={(e) => preventBubble(e, toggleEdit)}
        >
          <i className="fas fa-pencil-alt" />
        </Button>
      )}
      {isEditing && (
        <Button
          {...stdButtonProps}
          variant="danger"
          onClick={(e) => preventBubble(e, toggleEdit)}
        >
          <i className="fa fa-times" />
        </Button>
      )}
      {isEditing && (
        <Button
          {...stdButtonProps}
          variant="success"
          onClick={(e) => preventBubble(e, onEdit)}
          disabled={!fileName}
        >
          <i className="fa fa-check" />
        </Button>
      )}
    </div>
  );
};

export default FileActions;
