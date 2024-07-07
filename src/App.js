import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Main from './Main'

import Dnbeauti from './Products/Dnbeauti'

const App = () => {
  return (
    <>
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element= {<Main/>}/>
          <Route path='/shorts' element={<Dnbeauti/>}/>
        </Routes>
      </BrowserRouter>
      
     
      </div>
    </>
  )
}

export default App