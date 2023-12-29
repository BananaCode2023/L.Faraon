import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Artist from './pages/Artist'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Homepage from './pages/Homepage'

function App() {

  return (
    <>
    <div className='main-container'>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/artist' element={<Artist/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
