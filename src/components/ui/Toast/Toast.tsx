import { Icons } from 'constants/icons'
import toast from 'react-hot-toast'
import { cc } from 'utils/combineClasses'
import styles from './styles.module.scss'

interface Props {
  toastId: string
  message: string
  className?: string
}

const Toast = ({ className, toastId, message }: Props) => {
  return (
    <span className={cc(styles.toastRoot, className)}>
      <span className={styles.toastMessage}>{message}</span>
      <button className={styles.closeButton} onClick={() => toast.dismiss(toastId)}>
        {Icons.common.cross}
      </button>
    </span>
  )
}

export default Toast
