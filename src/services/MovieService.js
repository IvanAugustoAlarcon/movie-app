

    const API_KEY = "2863ce5f716d247ad6f4de72f7137131"
    const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    
    const getPopularMovies = async () => {

        try {
          console.log('hola')
          const popularMoviesResponse = await fetch(`${BASE_URL}`)
          console.log('popularMoviesResponse',popularMoviesResponse)
          const popularMoviesData = await popularMoviesResponse.json()
          console.log(popularMoviesData)
          return popularMoviesData
        } catch (error) {
          console.log('error')
        }
        

    }

export default getPopularMovies
