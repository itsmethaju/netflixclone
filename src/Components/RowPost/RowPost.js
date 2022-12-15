import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import './RowPost.css'
import YouTube from 'react-youtube';
import {imageUrl,API_KEY} from '../../constants/constants'
function RowPost(propes) {
    const [movie, setMovie] = useState([])
    const [urlid,setUrlid] =useState('')
    useEffect(() => {
        axios.get(propes.url).then(response=>{
            console.log(response.data)
            setMovie(response.data.results)
      }).catch(err=>{
        alert("NetWorke Error")
      })
    
      
    },)
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },}
      const playmovie =(id)=>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
          if(response.data.results.length !==0){
            setUrlid(response.data.results[0])
          }else{
            console.log("array emty")
          }
        })
      }
  return (
    <div className='row'>
        <h1 className='title'>{propes.title}</h1>
        <div className="posters">
        {movie.map((obj)=>
            <img onClick={()=>playmovie(obj.id)} className={propes.isSmall ?"smallposter":'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        )}
            
        </div>
        { urlid && <YouTube opts={opts} videoId={urlid.key}  />}
    </div>
  )
}

export default RowPost