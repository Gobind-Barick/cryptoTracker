import React from 'react'
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom'

import Exchanges from "./components/Exchanges"
import Header from './components/Header';
import Coins from "./components/Coins"
import Home from './components/Home';
import CoinDetails from "./components/CoinDetails"


const App = () => {
  return (
    <>
    
     <Router>

      <Header/>

      <Routes>

<Route path='/' element={<Home/>}/>
<Route path='/exchanges' element={<Exchanges/>}/>
<Route path='/coins' element={<Coins/>}/>
<Route path='/coin/:id' element={<CoinDetails/>}/>


      </Routes>
      </Router>
      
      </>
     
    
  )
}

export default App