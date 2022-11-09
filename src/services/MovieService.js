    const API_KEY = "2863ce5f716d247ad6f4de72f7137131"
    const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&`
    
    const getPopularMovies = async () => {

        try {
          const popularMoviesResponse = await fetch(`${BASE_URL}page=2`)
          console.log('popularMoviesResponse',popularMoviesResponse)
          const popularMoviesData = await popularMoviesResponse.json()
          console.log(popularMoviesData)
          return popularMoviesData
        } catch (error) {
          console.log('error')
        }

    }

    const getMovies = async () =>{
      try {
        const moviesResponse = await fetch(`${BASE_URL}page=1`)
        const data = await moviesResponse.json()
        return data
        
      } catch (error) {
        console.log('error')
      }
    }

    const searchMovie = async ()=>{
      const searchResponse = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}`)
      const searchData = await searchResponse.json()
      return searchData
    }

export {getPopularMovies, getMovies, searchMovie}
