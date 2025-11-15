import { useState } from 'react'
import TheamChange from './assets/UIComponents/Button/TheamChange'
import InputField from './assets/UIComponents/Input-field/InputField'
import { Toaster } from 'react-hot-toast'


function App() {
  

  return (
    <div>
       {/* <TheamChange/> */}
       <InputField/>
       <Toaster 
       position='top-center'
       reverseOrder={false}
       />
    </div>
  )
}

export default App
