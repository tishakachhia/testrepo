import React from 'react'

import Header from './componects/layout/header'
import Home from './componects/pages/home'
import {ToastContainer,toast} from 'react-toastify';

export default function App() {
  return (
    <div>
      <button>click me</button>
      <Header/>
      <Home/>
      
      
    </div>
    
  );
  
}
function Toast() {
  
  toast.error('error');
  return(
    <>
    <button onClick={Toast}>Clickme</button>

    <ToastContainer/>
   </>
  );
}




