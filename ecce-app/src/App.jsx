import { useState } from 'react'
import Header from './components/header'
import Preface from "./components/preface"
import Growth from "./components/growth"
import Prevention from './components/prevention'
import Team from './components/team'
import tramImg from './assets/tram.jpg'
import './App.css'

function App() {

  return (
    <>
      <Header></Header>
      <h1 className="font-inter font-bold font-2xl pt-28 pb-10 text-center ">Is Urbanization Good For Us?</h1>
      <img className='w-full opacity-50' src={tramImg} alt='Tram in Toronto' />
      <Preface></Preface>
      <div className='container'>
        <iframe src="https://experience.arcgis.com/experience/10a4405ff6a94cc8b87dffc3c01c0d45/"></iframe>
      </div>
      <Growth></Growth>
      <Prevention></Prevention>
      <Team></Team>
    </>
  )
}

export default App
