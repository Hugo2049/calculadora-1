import { renderHook, act } from '@testing-library/react'
import useCalculator from '../../hooks/useCalculator'
import React from 'react'

describe('useCalculator Hook', () => {
  test('initializes with display 0', () => {
    const { result } = renderHook(() => useCalculator())
    expect(result.current.display).toBe('0')
  })

  test('inputs numbers correctly', () => {
    const { result } = renderHook(() => useCalculator())
    
    act(() => result.current.inputNumber('1'))
    expect(result.current.display).toBe('1')
    
    act(() => result.current.inputNumber('2'))
    expect(result.current.display).toBe('12')
  })

  test('handles decimal input', () => {
    const { result } = renderHook(() => useCalculator())
    
    act(() => result.current.inputNumber('5'))
    act(() => result.current.inputDecimal())
    act(() => result.current.inputNumber('5'))
    
    expect(result.current.display).toBe('5.5')
  })

  test('performs addition', () => {
    const { result } = renderHook(() => useCalculator())
    
    act(() => result.current.inputNumber('2'))
    act(() => result.current.performOperation('+'))
    act(() => result.current.inputNumber('3'))
    act(() => result.current.calculate())
    
    expect(result.current.display).toBe('5')
  })

  test('clears the calculator', () => {
    const { result } = renderHook(() => useCalculator())
    
    act(() => result.current.inputNumber('9'))
    act(() => result.current.clear())
    
    expect(result.current.display).toBe('0')
    expect(result.current).toEqual(expect.objectContaining({
      display: '0',
      
    }))
  })
})