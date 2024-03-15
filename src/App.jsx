import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/navbar'
import Main from './components/main/main'
import Main2 from './components/main/main2/main2'
import Main3 from './components/main/main3/main3'
import Main4 from './components/main/main4/main4'
import Main5 from './components/main/main5/main5'
import Main6 from './components/main/main6/main6'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main7 from './components/main/main7/main7'
import Footer from './components/footer/footer'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path='/' element={<Main/>}/>

      <Route path='/main2'element={<Main2/>}/>
      <Route path='/main3'element={<Main3/>}/>
      <Route path='/main4' element={<Main4/>}/>
      <Route path='/main5' element={<Main5/>}/>
      <Route path='/main6' element={<Main6/>}/>
      <Route path='/main7' element={<Main7/>}/>



     </Routes>
     <Footer/>

     

    </BrowserRouter>
  )
}

export default App
