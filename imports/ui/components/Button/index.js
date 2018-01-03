import React from 'react'

import { styles } from './styles'

const Button = ({label, onClick}) => {
  return <button style={styles} onClick={onClick}>{label}</button>
}

export default Button
