import { cn } from '@/utils/cn'
import Input from '../TWInput'
import T from '../../Ui/TWTypography'

const FileRenamerForm = ({ fileName, extension, isEditing = false, loading = false, setFileName = (fileName) => {} }) => {
  if (!isEditing) return null

  const fileRenamerClasses = cn('tw:!flex tw:!items-center tw:!justify-between tw:!w-full tw:!gap-1 tw:!mr-2')

  return (
    <div className={fileRenamerClasses}>
      <Input
        type='text'
        className='tw:!flex-1 tw:!mb-0'
        size='sm'
        border='light'
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
        maxLength={180}
      />
      <T.Text className='tw:!mb-0' size='sm'>{`.${extension}`}</T.Text>
    </div>
  )
}

export default FileRenamerForm
