import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './styles'

const Input = ({id, type, onChange}) => {
  const handleOnChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <label style={styles.label} htmlFor={id}>
      <div>{id}</div>
      <input
        style={styles.input}
        id={id}
        type={type}
        onChange={handleOnChange}
      />
    </label>
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Input
