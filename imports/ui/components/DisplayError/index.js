import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './styles'

const DisplayError = ({message}) => (
  <div style={styles}>{message}</div>
);

DisplayError.propTypes = {
  message: PropTypes.string.isRequired
}

export default DisplayError
