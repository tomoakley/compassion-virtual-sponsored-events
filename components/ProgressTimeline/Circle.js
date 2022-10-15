import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProgressTimeline.module.css'

const Circle = ({isActive}) => {
  return (
    <div className={[styles.progressCircle, isActive ? styles.active : styles.inactive].join(" ")} />
  )
}

Circle.propTypes = {
  isActive: PropTypes.boolean
}

export default Circle

