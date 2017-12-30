import React from 'react'
import PropTypes from 'prop-types'

const DisplayError = ({message}) => (
  <div className="error">{message}</div>
);

DisplayError.propTypes = {
  message: PropTypes.string.isRequired
}

export default DisplayError
