import Loader from 'components/ui/Loader'
import { ReactNode, Suspense as ReactSuspense } from 'react'
import styles from './styles.module.scss'

interface Props {
  children: ReactNode
}

const Suspense = ({ children }: Props) => {
  return (
    <ReactSuspense
      fallback={
        <div className={styles.loaderContainerRoot}>
          <Loader className={styles.loader} />
        </div>
      }
    >
      {children}
    </ReactSuspense>
  )
}

export default Suspense
