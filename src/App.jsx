import React from 'react'
import Layout from './components/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Pricing from "./Pages/Pricing"
import Contact from "./Pages/Contact"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/pricing ' element={<Pricing />} />
            <Route path='/contact ' element={<Contact/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
