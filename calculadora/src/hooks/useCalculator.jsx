import { useState, useCallback } from 'react'

const useCalculator = () => {
  const [display, setDisplay] = useState('0')
  const [prevValue, setPrevValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForNewValue, setWaitingForNewValue] = useState(false)

  const formatResult = (num) => {
    if (num < 0) return 'ERROR'
    if (num > 999999999) return 'ERROR'
    
    let str = num.toString()
    if (str.length > 9) {
      if (str.includes('.')) {
        const [int, dec] = str.split('.')
        if (int.length > 9) return 'ERROR'
        const availableDecimals = 9 - int.length - 1
        if (availableDecimals > 0) {
          str = num.toFixed(availableDecimals)
          str = parseFloat(str).toString()
        } else {
          str = int
        }
      } else {
        return 'ERROR'
      }
    }
    return str.length > 9 ? 'ERROR' : str
  }

  const compute = (firstValue, secondValue, op) => {
    const first = parseFloat(firstValue)
    const second = parseFloat(secondValue)
    
    switch (op) {
      case '+': return first + second
      case '-': return first - second
      case '*': return first * second
      case '/': return second !== 0 ? first / second : NaN
      case '%': return second !== 0 ? first % second : NaN
      default: return second
    }
  }

  const inputNumber = useCallback((num) => {
    if (display === 'ERROR') return
    
    if (waitingForNewValue) {
      setDisplay(num)
      setWaitingForNewValue(false)
    } else {
      if (display.length >= 9) return
      setDisplay(display === '0' ? num : display + num)
    }
  }, [display, waitingForNewValue])

  const inputDecimal = useCallback(() => {
    if (display === 'ERROR' || display.length >= 9) return
    
    if (waitingForNewValue) {
      setDisplay('0.')
      setWaitingForNewValue(false)
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.')
    }
  }, [display, waitingForNewValue])

  const performOperation = useCallback((nextOperation) => {
    const inputValue = display
    
    if (prevValue === null) {
      setPrevValue(inputValue)
    } else if (operation) {
      const currentValue = prevValue || '0'
      const newValue = compute(currentValue, inputValue, operation)
      
      if (isNaN(newValue)) {
        setDisplay('ERROR')
        setPrevValue(null)
        setOperation(null)
        setWaitingForNewValue(true)
        return
      }
      
      const result = formatResult(newValue)
      setDisplay(result)
      setPrevValue(result)
    }
    
    setWaitingForNewValue(true)
    setOperation(nextOperation)
  }, [display, prevValue, operation])

  const calculateResult = useCallback(() => {
    const inputValue = display
    
    if (prevValue !== null && operation) {
      const currentValue = prevValue
      const newValue = compute(currentValue, inputValue, operation)
      
      if (isNaN(newValue)) {
        setDisplay('ERROR')
      } else {
        setDisplay(formatResult(newValue))
      }
      
      setPrevValue(null)
      setOperation(null)
      setWaitingForNewValue(true)
    }
  }, [display, prevValue, operation])

  const toggleSign = useCallback(() => {
    if (display === 'ERROR' || display === '0') return
    
    if (display.charAt(0) === '-') {
      setDisplay(display.substring(1))
    } else {
      if (display.length >= 9) return
      setDisplay('-' + display)
    }
  }, [display])

  const clear = useCallback(() => {
    setDisplay('0')
    setPrevValue(null)
    setOperation(null)
    setWaitingForNewValue(false)
  }, [])

  return {
    display,
    inputNumber,
    inputDecimal,
    performOperation,
    calculate: calculateResult,
    toggleSign,
    clear
  }
}

export default useCalculator