import React from 'react'
import PropTypes from 'prop-types'

import ProgressCircle from './Circle'
import ProgressBar from './ProgressBar'
import styles from './ProgressTimeline.module.css'

const ProgressTimeline = ({isLastCheckpoint, checkpointCompletionPercentage, imageUrl}) => {
  return (
    <div className={styles.container}>
      <ProgressCircle isActive={checkpointCompletionPercentage > 0} imageUrl={imageUrl} />
      {!isLastCheckpoint
      ? (
        <>
          {checkpointCompletionPercentage > 0 && <ProgressBar active={true} height={checkpointCompletionPercentage} />}
          {<ProgressBar active={checkpointCompletionPercentage === 1} />}
        </>
      )
      : null}
    </div>
  )
}

ProgressTimeline.propTypes = {
  isLastCheckpoint: PropTypes.bool,
  checkpointCompletionPercentage: PropTypes.number
}

export default ProgressTimeline

