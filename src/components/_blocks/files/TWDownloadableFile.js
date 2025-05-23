import moment from "moment"

import File, { fileProps } from "@/library/Form/Files/TWFile"
import { useFileDownloader } from "@/utils/hooks"
import T from "@/library/Ui/TWTypography"

const downloadableFileProps = {
  ...fileProps,
  id: undefined,
  url: undefined,
  kind: undefined,
  kindUrl: undefined,
  isPreview: false,
  showTimestamp: false,
  timestamp: undefined,
}

const DownloadableFile = (_props = downloadableFileProps) => {
  const { file, id, url, kind, kindUrl, isPreview, showTimestamp, ...props } = {
    ...downloadableFileProps,
    ..._props
  }
  const { getToken } = useFileDownloader(id, url, {
    kind,
    kindUrl,
  })

  const timestamp = props?.timestamp || moment(file?.created_at).format("YYYY-MM-DD HH:mm")

  return (
    <div>
      {showTimestamp && (
        <T.Timestamp>
          {timestamp}
        </T.Timestamp>
      )}
      <File 
        file={file} 
        {...props}
        onClick={getToken}
      />
    </div>
  )
}

export default DownloadableFile
