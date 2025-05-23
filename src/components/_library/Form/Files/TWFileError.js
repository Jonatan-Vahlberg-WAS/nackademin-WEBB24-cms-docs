import T from '../../Ui/TWTypography'

const FileError = ({ error }) => {
  if (!error) return null
  return <T.Error size='xs'>{error}</T.Error>
}

export default FileError
