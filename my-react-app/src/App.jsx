import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { tabletask } from "../Components/TaskTable"
export const FormPostTask = () => {

}
function App() {
  let url = import.meta.env.VITAL_URL
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
      </Routes>
    </BrowserRouter >
      
  </>
  )
}

export default App
