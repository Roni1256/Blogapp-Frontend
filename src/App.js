import React, { useState } from 'react';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { Routes,Route, Outlet } from 'react-router';

const App = () => {
  return (
    <>

    <div className="p-5  h-full">
      <div className="flex items-center justify-center py-5  w-full h-full">     
         <Nav/>
      </div>

    <Home/>
    </div>

    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>

  
    
  )
}

export default App