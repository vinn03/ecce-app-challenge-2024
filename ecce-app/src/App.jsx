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
      <h1 className="font-inter font-bold font-2xl pt-28 pb-10 text-center">Is Urbanization Good For Us?</h1>
      <img className='w-full opacity-50' src={tramImg} alt='Tram in Toronto' />
      <Preface></Preface>
      <h1 className="font-inter font-bold font-2xl mt-32 text-center bg-delft p-8">Urban land classification in the Greater Toronto Area from 1971 to 2021</h1>
      <div class="embed-container">
        <iframe frameborder="0" title="Urban areas 1971 vs 2021" src="//tianaandj.maps.arcgis.com/apps/Embed/index.html?webmap=4f14ac8db4704984bd0c794edbf92967&extent=-80.7947,43.3618,-78.2925,44.3952&home=true&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&legend=true&disable_scroll=true&theme=dark">
        </iframe>
      </div>
      <Growth></Growth>
      <Prevention></Prevention>
      <Team></Team>
    </>
  )
}

export default App
