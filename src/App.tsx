import React from 'react'

import Navbar from '@/scenes/navbar'
import Home from '@/scenes/home'
import Benefits from '@/scenes/benefits'

import { SelectedPage } from '@/shared/types'

function App() {
  const [selectedPage, setSelectedPage] = React.useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = React.useState<Boolean>(true)

  React.useEffect(() =>{
    const handleScroll = () => {
      if (!window.scrollY) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      } else {
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app bg-gray-20">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
