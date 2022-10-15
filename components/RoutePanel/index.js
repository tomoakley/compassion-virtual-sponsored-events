import React from 'react'
import PropTypes from 'prop-types'

import ProgressTimeline from '../ProgressTimeline'
import styles from './RoutePanel.module.css'

const RoutePanel = ({isLastCheckpoint}) => {
  return (
    <div className={styles.container}>
      <ProgressTimeline isLastCheckpoint={isLastCheckpoint} />
    </div>
  )
}

RoutePanel.propTypes = {
  isLastCheckpoint: PropTypes.bool
}

export default RoutePanel

