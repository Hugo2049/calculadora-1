import { render, screen } from '@testing-library/react'
import Display from '../../components/Display/Display'
import React from 'react'

describe('Display Component', () => {
  test('renders the display value', () => {
    render(<Display value="123" />)
    expect(screen.getByText('123')).toBeInTheDocument()
  })

  test('renders 0 by default', () => {
    render(<Display />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })
})