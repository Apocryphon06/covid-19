import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<NotFound/>}/>

    </Routes>
   </>
  )
}

export default App