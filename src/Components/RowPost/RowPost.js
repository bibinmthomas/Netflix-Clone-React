import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY,imageUrl} from '../../constants/constants'

function RowPost(props) {
    const [movies,setMovies] = useState([])
    useEffect(() => {
        axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
            setMovies(response.data.results)
        }).catch(err=>{
            // alert('Network Error')
        })
    }, [])
    
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>
            <img className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" srcset="" />
        )}
      </div>
    </div>
  )
}

export default RowPost
