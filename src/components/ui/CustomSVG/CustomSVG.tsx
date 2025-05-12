import { HTMLAttributes } from 'react'
import { cc } from 'utils/combineClasses'
import styles from './styles.module.scss'

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: JSX.Element
  className?: string
}

const CustomSVG = ({ className, children, ...otherDivProps }: Props) => {
  return (
    <div className={cc(styles.customSvgRoot, className)} {...otherDivProps}>
      {children}
    </div>
  )
}

export default CustomSVG
