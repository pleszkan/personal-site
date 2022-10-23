import classNames from 'classnames'
import React from 'react'
import styles from './styles.module.scss'

export default function OccupationCard({ className, children }) {
  return <div className={classNames(styles.card, className)}>{children}</div>
}
