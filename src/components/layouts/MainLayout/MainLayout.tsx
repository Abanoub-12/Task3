import { ReactNode } from 'react'
import { cc } from 'utils/combineClasses'
import styles from './styles.module.scss'

interface Props {
  children: ReactNode
  className?: string
}

const MainLayout = ({ children, className }: Props) => {
  return (
    <div className={cc(styles.mainLayoutRoot, className)}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default MainLayout
