import { cc } from 'utils/combineClasses'
import styles from './styles.module.scss'

interface Props {
  className?: string
}

const Checkbox = ({ className }: Props) => {
  return <div className={cc(styles.checkboxRoot, className)}>Checkbox component</div>
}


export default Checkbox
