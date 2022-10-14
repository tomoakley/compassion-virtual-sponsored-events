import React from 'react'
import Image from 'next/image'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="https://virtual-challenges-3053d747.cdn.memsites.com/logo_compassion_full_white.svg" className={styles.logo} />
    </header>
  )
}

export default Header
