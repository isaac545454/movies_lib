import {useState, useEffect} from 'react'
import Movie from '../components/movieCard'
import '../components/movieGrid.css'
const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const home = ()=>{
    const [topMovies, setTopMoveis] = useState([])

    const getTopRatedMovies = async ( url ) =>{
    const res = await fetch( url )
    const data = await res.json()
    setTopMoveis(data.results)
    
    }
    useEffect(()=>{
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
        getTopRatedMovies(topRatedUrl)
    }, [])

       return(
        <div className="container">
            <h2 className="title">melhores filmes</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>carregando</p>}
                {topMovies.length > 0 && topMovies.map((movie)=>
                 <Movie key={movie.id} movie={movie} />)}
            </div>
                 
        </div>) 
}
export default home