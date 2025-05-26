import { render, screen } from '@testing-library/react'
import App from '../App'
import React from 'react'

describe('App Component', () => {
  test('renders the calculator app', () => {
    render(<App />)
    expect(screen.getByRole('display')).toBeInTheDocument()
    expect(screen.getByText('CLEAR')).toBeInTheDocument()
  })
})