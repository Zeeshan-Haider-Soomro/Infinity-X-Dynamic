import { useState, useEffect } from 'react'
import Header from './Components/Header'
import { Outlet } from 'react-router'
import Footer from './Components/Footer'
import IntroVideo from './Components/IntroVideo'

const App = () => {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 9000) // 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (showIntro) {
    return <IntroVideo />
  }

  return (
    <div className='overflow-hidden'>
      <Header />
      <div className='pt-20'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
