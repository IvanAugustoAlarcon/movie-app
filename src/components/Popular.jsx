import React, {useEffect,useState} from 'react'

export default function Popular() {
  const API_KEY = "2863ce5f716d247ad6f4de72f7137131"

  const [popularMovies, setPopularMovies] = useState([])

  const getPopularMovies = async () => {
    const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

    const popularMoviesResponse = await fetch(`${BASE_URL}`)
    const popularMoviesData = await popularMoviesResponse.json()
    setPopularMovies(popularMoviesData)
    console.log(popularMoviesData)

  }

  useEffect(()=>{
    getPopularMovies()
  },[])
  return (
    <>
    <div className="container">
      <div className='row'>
        {popularMovies.results && popularMovies.results.map((popularMovieItem, index) => ( 

          <div className=' col-sm-12 col-md-6 col-lg-5 col-xl-3 cardsize'>
            <div className="card" style={{width: "18rem"}} kay={index}>
              <img className="card-img-top imgcard" src={`https://image.tmdb.org/t/p/w400/${popularMovieItem.poster_path}`} alt="Card image cap"/>
            </div>
          </div>
              
          ))}
      </div>
    </div>
    </>
  )
}
