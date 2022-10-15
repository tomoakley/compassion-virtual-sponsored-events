import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProgressTimeline.module.css'

const Circle = ({isActive, imageUrl}) => {
  const icon =  'https://virtual-challenges-3053d747.cdn.memsites.com/Three%20Cs%20-%20Church-Based%20(solid%20blue).svg';
  return (
    <div style={ { 'backgroundImage': `Url('${isActive ? imageUrl : icon}')` } } className={[styles.progressCircle, isActive ? styles.activated : styles.inactive].join(" ")} />
  )
}

Circle.propTypes = {
  isActive: PropTypes.bool
}

export default Circle

