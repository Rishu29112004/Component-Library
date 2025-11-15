import React from 'react'

const Button = ({buttonName,className="",type="button",onClick}) => {
  return (
    
      <button type={type} onClick={onClick}
      className={`px-4 py-2 ${className}`}>{buttonName}</button>
    
  )
}

export default Button
