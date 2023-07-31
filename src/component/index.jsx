import React, { useEffect,useState } from "react"
import './style.css';
import { getMovies } from "../Utils/utilities.jsx";
const IMAGE_BASE_URL=process.env.REACT_APP_IMAGE_BASE_URL;
const GetMovies =()=>{
    const [movies,setMovies] =useState([]);
    const[loading,setLoading]=useState(false);
    useEffect(()=>{
        (async () =>{
            setLoading(true);
            const movies=await getMovies();
            console.log({movies});
            setLoading(false);
            setMovies(movies.results);
        })();
    },[]);
    if(loading){
        return <h1>Loading movies...</h1>
    }
    return(
        <div className="container">
            {movies &&
            !loading &&
            movies.length>0 &&
            movies.map(item=>(
                <div className="image-container">
                    <img src={`${IMAGE_BASE_URL}${item.poster_path}`} alt={item.title}/>
                    </div>
            ))}
          {movies && !loading && movies.length ===0 &&(
            <div>
                <h1>No movies </h1>
            </div>
          )}
        </div>
    )
}
export default GetMovies;