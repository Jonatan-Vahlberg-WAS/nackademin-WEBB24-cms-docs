import { cn } from "@/utils/cn";
import Input from "../TWInput";
import T from "../../Ui/TWTypography";

const FileRenamerForm = ({
  fileName,
  extension,
  isEditing = false,
  loading = false,
  setFileName = (fileName) => {},
}) => {
  if (!isEditing) return null;

  const fileRenamerClasses = cn(
    "flex items-center justify-between w-full gap-1 mr-2"
  );

  return (
    <div className={fileRenamerClasses}>
      <Input
        type="text"
        className="flex-1 mb-0"
        size="sm"
        border="light"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
        maxLength={180}
      />
      <T.Text className="mb-0" size="sm">{`.${extension}`}</T.Text>
    </div>
  );
};

export default FileRenamerForm;
