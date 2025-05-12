import { cc } from 'utils/combineClasses'
import styles from './styles.module.scss'

interface Props {
  className?: string
}

const IconButton = ({ className }: Props) => {
  return <div className={cc(styles.iconButtonRoot, className)}>IconButton component</div>
}


export default IconButton
