import React from 'react'

import ProgressCircle from './Circle'
import ProgressBar from './ProgressBar'
import styles from './ProgressTimeline.module.css'

const ProgressTimeline = () => {
  return (
    <div className={styles.container}>
      <ProgressCircle />
      <ProgressBar />
    </div>
  )
}

export default ProgressTimeline

