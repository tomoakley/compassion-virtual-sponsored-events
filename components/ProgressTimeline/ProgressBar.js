import React from 'react'
import styles from './ProgressTimeline.module.css'

const ProgressBar = () => {
  return (
    <div className={[styles.progressBar, styles.inactive].join(" ")} />
  )
}

export default ProgressBar

