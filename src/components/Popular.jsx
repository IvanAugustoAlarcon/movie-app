import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {getPopularMovies} from '../services/MovieService'
import {searchMovie} from '../services/MovieService'

export default function Popular({searchvalue}) {

  const [popularMovies, setPopularMovies] = useState([])

  useEffect (() => {
    getPopularMovies().then((data) =>{
      setPopularMovies(data.results)
    })
  },[])

  if(searchvalue.length > 0){
    searchMovie(searchvalue).then((data) => {
      setPopularMovies(data.results)
    })
}
  
  return (
    <>
    <div className="container">
      <div className='row'>
        {popularMovies && popularMovies.map((popularMovieItem, index) => ( 

          <div className=' col-sm-12 col-md-6 col-lg-5 col-xl-3 card-size' key={index}>
            <div className="card" style={{width: "18rem"}} >
              <img className="card-img-top img-card" src={`https://image.tmdb.org/t/p/w400/${popularMovieItem.poster_path}`} alt="Card image cap"/>
            </div>
          </div>
              
        ))}
      </div>
    </div>
    </>
  )
}
