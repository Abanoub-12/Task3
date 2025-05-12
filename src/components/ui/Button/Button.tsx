import { cc } from 'utils/combineClasses'
import styles from './styles.module.scss'
import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
}

const Button = ({ className }: Props) => {
  return <div className={cc(styles.buttonRoot, className)}>Button component</div>
}


export default Button
