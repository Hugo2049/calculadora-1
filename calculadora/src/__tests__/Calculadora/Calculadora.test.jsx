import { render, screen, fireEvent } from '@testing-library/react'
import Calculadora from '../../Calculadora/Calculadora'
import React from 'react'

describe('Calculadora Component', () => {
  test('renders all calculator buttons', () => {
    render(<Calculadora />)
    
    // Verifica algunos botones clave
    expect(screen.getByText('CLEAR')).toBeInTheDocument()
   expect(screen.getByText('+/-')).toBeInTheDocument()

    expect(screen.getByText('=')).toBeInTheDocument()
    expect(screen.getByText('7')).toBeInTheDocument()
    expect(screen.getByText('.')).toBeInTheDocument()
    expect(screen.getByText('MODULO (%)')).toBeInTheDocument()
  })

  test('performs addition correctly', () => {
    render(<Calculadora />)
    
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('='))
    
    expect(screen.getByRole('display')).toHaveTextContent('5')
  })

  test('clears the display', () => {
    render(<Calculadora />)
    
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('CLEAR'))
    
    expect(screen.getByRole('display')).toHaveTextContent('0')
  })
})