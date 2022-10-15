import React from 'react'
import styles from './hero.module.css'

const Hero = props => {
  return ( <div className={ styles.hero } >
    <div className={styles.bigletters}>Virtual Challenges:</div>
    <h1> Kenya 150km</h1>
    <div className={styles.yellowLine}></div>
    <div className={styles.bottommargin}> 1 January 2023 - 31 March 2023</div>
    <div className={styles.bottommargin}> 
      <button onClick={() => {window.location = "https://virtual-challenges-3053d747.cdn.memsites.com/vc-kenya-map-route.png"}}>View route</button>
    </div>
  </div> )
}

export default Hero
