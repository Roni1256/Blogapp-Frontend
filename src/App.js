import React, { useState } from 'react';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';

import {Profile} from './pages/Profile'
import { Routes,Route } from 'react-router';
import {Blog} from './components/Blog'
import Footer from './components/Footer';
import { NewPost } from './pages/NewPost';

const App = () => {
  return (
    <>

    <div className="h-full">
      <div className="flex items-center justify-center w-full  "><Nav/></div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='newpost' element={<NewPost/>}/>
      </Routes>
      
    </div>
  
    <Footer/>
    
    </>

  
    
  )
}

export default App