import React from 'react'

import Header from './componects/layout/header'
import Home from './componects/pages/home'
import {ToastContainer,toasty} from 'react-toastify'

export default function App() {
  return (
    <div>
      <button>click me</button>
      <Header/>
      <Home/>
      
    </div>
    
  );
  
}

function toast() {
  
  toast.error('error')
  <button onclick ={Toast}>Click me</button>
  <ToastContainer/>
}


