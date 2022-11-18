import './App.css'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Popular from './components/Popular'
import Home from './components/Home'
import { useState } from 'react'
import Footer from './components/Footer'

const App = () => {

  const [searchValue, setSearchValue] = useState([])

  const handleSearch = (e) => {
    setSearchValue(e)
  }

  return (
    <div className="App">
      <NavBar handleSearch={handleSearch}/>
      <Routes>
            <Route path='/movie-app' element={<Home searchvalue = {searchValue}/>}/>
            <Route path='popular' element={<Popular searchvalue = {searchValue}/>}/>
            {/* pagina 404 */}
            <Route path="*" element={<h3> Page not found 404 </h3>} />
      </Routes>
      <Footer/>
    </div>
  )
  
}

export default App
