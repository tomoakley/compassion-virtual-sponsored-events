import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

import ProgressTimeline from '../ProgressTimeline'
import styles from './RoutePanel.module.css'

import calculateCompletionCheckpointPercentage from '../../util/calculateCheckpointCompletionPercentage'

const RoutePanel = ({
  isLastCheckpoint,
  checkpointNumber,
  title,
  cta,
  content,
  description,
  imageUrl,
  progressInKm,
  completedDistanceInKm,
  nextCheckpointInKm,
}) => {

  const checkpointCompletionPercentage = calculateCompletionCheckpointPercentage(progressInKm, nextCheckpointInKm, completedDistanceInKm)

  const [expanded, setExpanded] = useState(false)
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
        <div className={[styles.content, expanded ? styles.expanded : styles.collapsed].join(" ")} >
          <span>{content}</span>
          <div style={{marginTop: '20px'}}>
            <a className={styles.button} href={cta.link}>{cta.text}</a>
          </div>
        </div>
        {checkpointCompletionPercentage===1 && <div className={styles.collapse}><a href="#" onClick={(e) =>{ e.preventDefault(); setExpanded(!expanded)}}>{expanded ? 'close' : 'open'}</a></div> }
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

