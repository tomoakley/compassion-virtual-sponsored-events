import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProgressTimeline.module.css'

const ProgressBar = ({active, height}) => {
  return (
    <div
      className={[styles.progressBar, active ? styles.activated : styles.inactive].join(" ")}
      style={{ height: `${230 * height}px`}}
    />
  )
}

ProgressBar.propTypes = {
  active: PropTypes.bool,
  height: PropTypes.number
}

export default ProgressBar

