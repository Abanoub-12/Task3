import { cc } from 'utils/combineClasses'
import styles from './styles.module.scss'

interface Props {
  image: string;
  title: string;
  subtitle: string;
  content?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  className?: string
}

const Card = ({ className }: Props) => {
  return <div className={cc(styles.cardRoot, className)}>Card component</div>
}


export default Card
