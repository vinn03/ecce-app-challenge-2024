import { useState } from 'react'
import Header from './components/header'
import Preface from "./components/preface"
import Growth from "./components/growth"
import Prevention from './components/prevention'
import tramImg from './assets/tram.jpg'
import './App.css'

function App() {

  return (
    <>
      <Header></Header>
      <h1 className="font-inter font-bold font-2xl pt-28 pb-10 text-center ">Is Urbanization Good For Us?</h1>
      <img className='w-full opacity-50' src={tramImg} alt='Tram in Toronto' />
      <Preface></Preface>
      <Growth></Growth>
      <Prevention></Prevention>
    </>
  )
}

export default App
