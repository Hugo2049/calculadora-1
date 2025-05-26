import useCalculator from '../hooks/useCalculator'
import Display from '../components/Display/Display'
import Button from '../components/Button/Button'
import styles from './Calculadora.module.css'
import React from 'react'

const Calculadora = () => {
  const {
    display,
    inputNumber,
    inputDecimal,
    performOperation,
    calculate,
    toggleSign,
    clear
  } = useCalculator()

  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorInner}>
        <Display value={display} />
        
        <div className={styles.buttonGrid}>
          <Button
            onClick={clear}
            className="col-span-2 bg-red-500 hover:bg-red-600 text-white"
          >
            CLEAR
          </Button>
          <Button
            onClick={toggleSign}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800"
          >
            +/-
          </Button>
          <Button
            onClick={() => performOperation('/')}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            ÷
          </Button>
          <Button
            onClick={calculate}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            =
          </Button>
          <Button
            onClick={() => inputNumber('7')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            7
          </Button>
          <Button
            onClick={() => inputNumber('8')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            8
          </Button>
          <Button
            onClick={() => inputNumber('9')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            9
          </Button>
          <Button
            onClick={() => performOperation('*')}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            ×
          </Button>
          
          <Button
            onClick={() => inputNumber('4')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            4
          </Button>
          <Button
            onClick={() => inputNumber('5')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            5
          </Button>
          <Button
            onClick={() => inputNumber('6')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            6
          </Button>
          <Button
            onClick={() => performOperation('-')}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            -
          </Button>
          
          <Button
            onClick={() => inputNumber('1')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            1
          </Button>
          <Button
            onClick={() => inputNumber('2')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            2
          </Button>
          <Button
            onClick={() => inputNumber('3')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            3
          </Button>
          <Button
            onClick={() => performOperation('+')}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            +
          </Button>

          <Button        //Lo cree, para que no se viera tan corrido el 0
            className="col-span-2 bg-gray-200 white"
          >
          </Button>
          <Button
            onClick={() => inputNumber('0')}
            className="col-span-2 bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            0
          </Button>
          <Button
            onClick={inputDecimal}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            .
          </Button>
          
          <Button
            onClick={() => performOperation('%')}
            className="col-span-4 bg-purple-500 hover:bg-purple-600 text-white"
          >
            MODULO (%)
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Calculadora