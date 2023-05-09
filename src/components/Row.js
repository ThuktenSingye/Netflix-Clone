import React, { useEffect, useState } from 'react'
import axios from '../axios';
import './Row.css';

// base url for image
const base_url = 'https://image.tmdb.org/t/p/original/';


function Row({title, fetchUrl, isLargeRow}) {
  
  const [movies, setMovies] = useState([])
  // a code which runs based on a specific condition / variable
  // when row component is load, below code will run based on fetchurl as dependency
  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  },[fetchUrl])
  // console.log(movies)

  return (
    <div className='row'>
      {/* title */}
      <h2>{title}</h2>
      {/* container -> posters */ }
      <div className='row_posters'>
        {movies.map(movie=>(
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} 
            key={movie.id} 
            alt={movie.title}/>
        ))}
      </div>
      
    </div>
  )
}

export default Row