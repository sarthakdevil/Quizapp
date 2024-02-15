import { useState } from 'react'
import './App.css'
import Header from './header'
import Ques from './textarea'
function App() {
  return(
    <div className="bg-[#040F48] absolute w-[100vw] h-[100vh] ">
      <Header />
      <Ques></Ques>
    </div>
  )
}

export default App
