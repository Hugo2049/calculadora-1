import styles from './Button.module.css'
import React from 'react'

const Button = ({ onClick, className, children, ...props }) => (
  <button
    onClick={onClick}
    className={`h-16 text-xl font-semibold rounded-lg transition-all duration-200 active:scale-95 ${className}`}
    {...props}
  >
    {children}
  </button>
)

export default Button