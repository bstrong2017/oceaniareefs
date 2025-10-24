import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from "./components/HeroSection";
import HistorySection from "./components/HistorySection";

function App() {
  return (
    <div className="font-body text-textDark">
       <HeroSection />
       <HistorySection />
    </div>
  )
}

export default App

