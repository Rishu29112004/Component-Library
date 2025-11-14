import React from 'react'

const Button = ({buttonName, setTheme, theme}) => {
  return (
    <div>
      <button onClick={()=>setTheme(!theme)}
      className="px-4 py-2 bg-blue-500 text-white rounded-md">{buttonName}</button>
    </div>
  )
}

export default Button
