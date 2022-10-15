import React from 'react'
import PropTypes from 'prop-types'

import ProgressTimeline from '../ProgressTimeline'
import styles from './RoutePanel.module.css'

const RoutePanel = ({isLastCheckpoint, checkpointNumber, title, description, imageUrl, progressInKm}) => {
  return (
    <div className={styles.container}>
      <ProgressTimeline isLastCheckpoint={isLastCheckpoint} />
      <div className={styles.routeData}>
        <h2 className={styles.routeTitle}>
          {checkpointNumber === 0
            ? 'Start Point'
            : `Checkpoint ${checkpointNumber}`
          }
        </h2>
        <div className={styles.routeDistance}>
          <span className={styles.completedDistance}>{progressInKm}km</span> / 150km
        </div>
        <span>{title}</span>
      </div>
    </div>
  )
}

RoutePanel.propTypes = {
  isLastCheckpoint: PropTypes.bool,
  checkpointNumber: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.bool
}

export default RoutePanel

