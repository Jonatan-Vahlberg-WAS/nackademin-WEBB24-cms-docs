import { cn } from '../../../utils/cn'


const FormError = ({ error, touched = false, className, ...props }) => {
  if (!error || !touched) {
    return null;
  }
  const errorClasses = cn(
    'tw:!text-red-700 tw:!text-sm tw:!mt-1',
    className || ''
  );
  return <div className={errorClasses} {...props}>{error}</div>;
}

export default FormError;