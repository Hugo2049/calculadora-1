import styles from './Display.module.css'
import React from 'react'

const Display = ({ value = '0' }) => (
  <div className={styles.displayContainer} role="display">
    <div className={styles.displayContent}>
      {value}
    </div>
  </div>
)

export default Display