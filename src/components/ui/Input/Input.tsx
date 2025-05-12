import { cc } from 'utils/combineClasses'
import styles from './styles.module.scss'

interface Props {
  className?: string
}

const Input = ({ className }: Props) => {
  return <div className={cc(styles.inputRoot, className)}>Input component</div>
}


export default Input
