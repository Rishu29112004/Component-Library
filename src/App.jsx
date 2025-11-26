import { useState } from 'react'
import TheamChange from './assets/UIComponents/Button/TheamChange'
import InputField from './assets/UIComponents/Input-field/InputField'
import { Toaster } from 'react-hot-toast'
import SearchBar from './assets/UIComponents/SearchBar/SearchBar'
import PopupModal from './assets/UIComponents/PopupModal.jsx/PopupModal'
import Dropdown from './assets/UIComponents/Dropdown/Dropdown'
import First from './assets/UIComponents/Example/Firsts'
import TabsComponent from './assets/UIComponents/TabsComponent/TabsComponent'
import Accordian from './assets/UIComponents/Accordian/Accordian'
import Main from './assets/UIComponents/ProfileModal/Main'


function App() {
  

  return (
    <div>
       {/* <TheamChange/> */}
       {/* <InputField/> */}
       {/* <SearchBar/> */}
       {/* <PopupModal/> */}
       {/* <Dropdown/> */}
       {/* <First/> */}
       {/* <TabsComponent/> */}
       {/* <Accordian/> */}
       <Main/>
       <Toaster 
       position='top-center'
       reverseOrder={false}
       />
    </div>
  )
}

export default App
