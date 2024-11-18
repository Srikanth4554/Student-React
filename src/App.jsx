

import React from 'react'
import CoursePage from './Components/CoursePage'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
   
<BrowserRouter>

<Routes>
     <Route path='/Student-React/' element={<Home/>} exact/>
     <Route path='/Student-React/:id' element={<CoursePage/>}/>
   </Routes>
</BrowserRouter>

  
  )
}

export default App