import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Popular from './Popular'
import Home from './Home'

const NavBar = () =>{
  return (
    <>
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <h5>Movie App</h5>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="popular">Popular</Link>
                            </li>
                        </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='popular' element={<Popular/>}/>
            {/* pagina 404 */}
            <Route path="*" element={<h3> Page not found 404 </h3>} />
        </Routes>
    </>
  )
}

export default  NavBar
