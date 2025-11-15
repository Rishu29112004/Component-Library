import React, { useState } from 'react'
import Button from './Button'

const TheamChange = () => {
  const [theme,setTheme]=useState(false)
  return (
    <div className={` min-h-screen w-full flex flex-col gap-4 items-center justify-center ${theme?"bg-black text-white":"bg-white text-black"}`}>
      <p className='font-mono text-2xl'>Change theam by clicking this button.</p>
      <Button className="text-white bg-green-500 w-full" buttonName="CLick here!" onClick={()=>setTheme(!theme)}/>
    </div>
  )
}

export default TheamChange
