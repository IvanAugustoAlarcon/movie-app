import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Popular from './Popular'
import Home from './Home'
import Search from './Search'
import {searchMovie} from '../services/MovieService'
import { useState } from 'react'
import { useEffect } from 'react'

const NavBar = () =>{

    const [searchValue, setSearchValue] = useState([])
    const [movies, setMovies] = useState([])

    useEffect(() => {

    },[searchValue])

    const inputValue = (event) => {
        console.log("Valor", event.currentTarget.value.toLowerCase())
        setSearchValue (event.currentTarget.value)
        searchMovie(searchValue).then((data) => {
            setMovies(data.results)
            console.log('NabBar', data.results)
        })
        // console.log("Valor", searchValue)

    }

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
                            <li className="nav-item">
                                <Link className="nav-link" to="search">Search</Link>
                            </li>
                        </ul>
                    <form className="d-flex" role="search">
                        <input  onChange={inputValue} value={searchValue} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                    </div>
                </div>
            </nav>
        </div>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='popular' element={<Popular/>}/>
            <Route path='search' element={<Search/>}/>
            {/* pagina 404 */}
            <Route path="*" element={<h3> Page not found 404 </h3>} />
        </Routes>

        <>
        <div className="container">
        <div className='row'>
            {movies && movies.map((movieItem, index) => ( 

            <div className=' col-sm-12 col-md-6 col-lg-5 col-xl-3 card-size' key={index}>
                <div className="card" style={{width: "18rem"}} >
                <img className="card-img-top img-card" src={`https://image.tmdb.org/t/p/w400/${movieItem.poster_path}`} alt="Card image cap"/>
                </div>
            </div>
                
            ))}
        </div>
        </div>
    </>
    </>
  )
}

export default  NavBar
