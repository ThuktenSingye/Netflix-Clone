import React, { useEffect, useState } from 'react'

import axios from '../axios';
import './Row.css';
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'; // this will find the movie trailer from youtube 

// base url for image
const base_url = 'https://image.tmdb.org/t/p/original/';


function Row({title, fetchUrl, isLargeRow}) {
  
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState("");

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

  const opts = {
    height: "390",
    weight: "100%",
    playerVars:{
      autoplay: 1,
    },
  };
  
  const handleClick= (movie)=>{
    if (trailerUrl){
      setTrailerUrl('');
    }else{
      movieTrailer(movie?.name || movie?.title || "" )
      .then(url =>{
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      }).catch((error)=> console.log(error))
    }
  }

  return (
    <div className='row'>
      {/* title */}
      <h2>{title}</h2>
      {/* container -> posters */ }
      <div className='row_posters'>
        {movies.map(movie=>(
          <img
            onClick={()=>handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} 
            key={movie.id} 
            alt={movie.title}/>
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row