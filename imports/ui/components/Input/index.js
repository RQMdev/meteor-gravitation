import React from 'react'

const Input = ({id, type, onChange}) => {
  const handleOnChange = (e) => {
    onChange(e.target.value);
  }

  return (
    <label htmlFor={id}>{id}
      <input id={id} type={type} onChange={handleOnChange}/>
    </label>
  )
}

// Input.propTypes = {
//   id: React.propTypes.string.isRequired,
//   type: React.propTypes.string.isRequired,
//   onChange: React.propTypes.func.isRequired
// }

export default Input
