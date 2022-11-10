import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {getMovies} from '../services/MovieService'


export default function Home() {

    const [movies, setMovies] = useState([])

    useEffect (() => {
        getMovies().then((data) =>{
        setMovies(data.results)
        console.log('results', data)
        })

        
    },[])

  return (
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
  )
}
