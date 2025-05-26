import styles from './App.module.css'
import Calculadora from './Calculadora/Calculadora'
import React from 'react'

function App() {
  return (
    <div className={styles.app}>
      <Calculadora />
    </div>
  )
}

export default App