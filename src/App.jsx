import Header from './Components/Header'
import { Outlet } from 'react-router'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='overflow-hidden '>
      <div>
        <Header/>
      </div>
      <div className='pt-20'>
        <Outlet/>
      </div>
      <div className=''>
        <Footer/>
      </div>
    </div>
  )
}

export default App