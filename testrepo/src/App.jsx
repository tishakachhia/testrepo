import React from 'react'

import Header from './componects/layout/header'
import Home from './componects/pages/home'
import {ToastContainer,toast} from 'react-toastify'

export default function App() {

  const to = () => {
    toast.success('success')
  }

  return (
    <div>
      <button onClick={to}>click me</button>
      <Header/>
      <Home/>
      
      <ToastContainer/>
    </div>
    
  );
  
}



