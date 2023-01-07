import React, { useEffect, useState } from 'react'
import './Banner.css'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from 'axios'

function Banner() {
    const [movies, setMovies] = useState()
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovies(response.data.results[5])
        })
    },[])
  return (

      <div style={{backgroundImage:`url(${movies?imageUrl+movies.backdrop_path:""})`}}
       className="banner">
        <div className="content">
            <h1 className="title">{movies? movies.title:''}</h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className="description">{movies?movies.overview:''}</h1>
        </div>
        <div className="fade_bottom"></div>
      </div>
    
    
  )
}

export default Banner
