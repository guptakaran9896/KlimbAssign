import React from 'react'
import Secondscreen from './Components/Secondscreen'
import {Routes,Route} from 'react-router-dom'
import Page from './Components/Page'
function App() {
  return (
    <div className='main'>
      
    <Routes>
      <Route path="/" element={<Page/>}/>
      <Route path="/secondpage" element={<Secondscreen/>}/>
    </Routes>
    </div>
  )
}

export default App