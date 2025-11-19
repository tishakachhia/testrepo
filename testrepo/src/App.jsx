import React from 'react'

import Header from './componects/layout/Header'
import Home from './componects/pages/home'
import About from './componects/pages/About'
import {ToastContainer,toast} from 'react-toastify'
import {BrowserRouter,Routes,Route} from 'react-router-dom'



export default function App() {

  const to = () => {
    toast.success('success')
  }

  return (
    <div>
      <button onClick={to}>click me</button>
        <ToastContainer/>

      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
  
}



