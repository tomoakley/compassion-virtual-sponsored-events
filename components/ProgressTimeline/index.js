import React from 'react'
import PropTypes from 'prop-types'

import ProgressCircle from './Circle'
import ProgressBar from './ProgressBar'
import styles from './ProgressTimeline.module.css'

const ProgressTimeline = ({isLastCheckpoint}) => {
  return (
    <div className={styles.container}>
      <ProgressCircle />
      {!isLastCheckpoint
      ? <ProgressBar />
      : null}
    </div>
  )
}

ProgressTimeline.propTypes = {
  isLastCheckpoint: PropTypes.bool
}

export default ProgressTimeline

