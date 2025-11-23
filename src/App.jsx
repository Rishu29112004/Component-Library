import { useState } from 'react'
import TheamChange from './assets/UIComponents/Button/TheamChange'
import InputField from './assets/UIComponents/Input-field/InputField'
import { Toaster } from 'react-hot-toast'
import SearchBar from './assets/UIComponents/SearchBar/SearchBar'
import PopupModal from './assets/UIComponents/PopupModal.jsx/PopupModal'


function App() {
  

  return (
    <div>
       {/* <TheamChange/> */}
       {/* <InputField/> */}
       {/* <SearchBar/> */}
       <PopupModal/>
       <Toaster 
       position='top-center'
       reverseOrder={false}
       />
    </div>
  )
}

export default App
