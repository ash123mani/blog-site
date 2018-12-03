import React from 'react'
import InputFeedback from '../InputFeedback'

const TextInput = ({ error, label, name, onChange, type, value, ...props }) => {
  let classes = []
  if (name === 'lastName' && error) {
    classes.push('text-input')
  }
  if (error) {
    classes.push('text-input--error')
  }

  return (
    <div className={classes.join(' ')}>
      <br />
      <input
        className='input-group'
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <br />
      <InputFeedback error={error} name={name} />
    </div>
  )
}

export default TextInput
