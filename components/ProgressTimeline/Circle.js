import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProgressTimeline.module.css'

const Circle = ({isActive}) => {
  return (
    <div className={[styles.progressCircle, isActive ? styles.activated : styles.inactive].join(" ")} />
  )
}

Circle.propTypes = {
  isActive: PropTypes.bool
}

export default Circle

