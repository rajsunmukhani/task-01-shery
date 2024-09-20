import React  from 'react'
import Nav from './Components/Nav'
import Home from './Components/Homee'
import { Route, Routes } from 'react-router-dom'
import Context from './Context/Context'
import Summary from './Components/Summary'



const App = () => {
  return (
    <div>
      <Context>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home />  } />
          <Route path='/summary' element={<Summary />} />
        </Routes>
      </Context>
    </div>
  )
}

export default App