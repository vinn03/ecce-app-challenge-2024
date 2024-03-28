import { useState } from 'react'
import Header from './components/header'
import Info from "./components/info"
import tramImg from './assets/tram.jpg'
import './App.css'

function App() {

  return (
    <>
      <Header></Header>
      <h1 className="font-inter font-bold font-2xl pt-28 pb-10 text-center ">Is Urban Growth Good For Us?</h1>
      <img className='w-full opacity-50' src={tramImg} alt='Tram in Toronto' />
      <Info></Info>
    </>
  )
}

export default App
