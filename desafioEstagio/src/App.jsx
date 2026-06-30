import { useState } from 'react'
import { Home } from './pages/Home'
import { Exercicio1 } from './pages/Exercicio1'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Exercicio1 />} path="/exercicio1" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
