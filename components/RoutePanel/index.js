import React from 'react'

import ProgressTimeline from '../ProgressTimeline'
import styles from './RoutePanel.module.css'

const RoutePanel = () => {
  return (
    <div className={styles.container}>
      <ProgressTimeline />
    </div>
  )
}

export default RoutePanel

