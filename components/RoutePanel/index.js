import React from 'react'
import PropTypes from 'prop-types'

import ProgressTimeline from '../ProgressTimeline'
import styles from './RoutePanel.module.css'

import calculateCompletionCheckpointPercentage from '../../util/calculateCheckpointCompletionPercentage'

const RoutePanel = ({
  isLastCheckpoint,
  checkpointNumber,
  title,
  description,
  imageUrl,
  progressInKm,
  completedDistanceInKm,
  nextCheckpointInKm,
}) => {

  const checkpointCompletionPercentage = calculateCompletionCheckpointPercentage(progressInKm, nextCheckpointInKm, completedDistanceInKm)

  const getCheckpointName = (checkpointNo) => {
    switch(true) {
      case checkpointNo === 0:
        return 'Start Point'
      case isLastCheckpoint:
        return 'Finish Line'
      default:
        return `Checkpoint ${checkpointNo}`
    }
  }

  return (
    <div className={styles.container}>
      <ProgressTimeline isLastCheckpoint={isLastCheckpoint} checkpointCompletionPercentage={checkpointCompletionPercentage} imageUrl={imageUrl} />
      <div className={styles.routeData}>
        <h2 className={styles.routeTitle}>
          {getCheckpointName(checkpointNumber)}
        </h2>
        <div className={styles.routeDistance}>
          <span className={checkpointCompletionPercentage > 0 ? styles.completedDistance : styles.incompleteDistance}>{progressInKm}km</span> / 150km
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
  description: PropTypes.bool,
  completedDistanceInKm: PropTypes.number,
  progressInKm: PropTypes.number,
  nextCheckpointInKm: PropTypes.number
}

export default RoutePanel

