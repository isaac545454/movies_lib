import {useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import Card from  '../components/movieCard'
import './movie.css'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const movie = ()=>{
    const { id } = useParams()
    const [movie, setMovie] = useState(null);

    const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovie(data);
  };
  const formatCurrency = (number)=>{
    return number.toLocaleString("en-us", {
        style: "currency",
        currency: "USD"
    })
  }
  useEffect(()=>{
        const moviesurl = `${moviesURL}${id}?${apiKey}` 
        getMovie(moviesurl)
  },[])






    return(<div className="movie-page">
    {movie && (
        <>
            <Card movie={movie} showLink={false} />
            <p className="tagline">{movie.tagline}</p>
            <div className="info">
                <h3>
                    <BsWallet2 /> orçamento:
                </h3>
                <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className="info">
                <h3>
                    <BsGraphUp/> receita:
                </h3>
                <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className="info">
                <h3>
                    <BsHourglassSplit /> duração:
                </h3>
                <p>{movie.runtime}</p>
            </div>
            <div className="info description">
                <h3>  
                    <BsFillFileEarmarkTextFill /> descrição:
                </h3>
                <p>{movie.overview}</p>
            </div>
        </>
     ) }
        </div>)
}
export default movie