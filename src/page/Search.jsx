import {useEffect, useState } from 'react'
import {useSearchParams } from "react-router-dom"
import Movie from '../components/movieCard'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY
import '../components/movieGrid.css'

const search = ()=>{
    const [searchParams] = useSearchParams()
    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

    const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

     useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
    }, [query]);

     return(
        <div className="container">
            <h2 className="title">resultados para:
            <span className="query-text">{query}</span>
            </h2>
            <div className="movies-container">
                {movies.length === 0 && <p>carregando</p>}
                {movies.length > 0 && movies.map((movie)=> <Movie key={movie.id} movie={movie} />)}
            </div>
                 
        </div>) 

}
export default search