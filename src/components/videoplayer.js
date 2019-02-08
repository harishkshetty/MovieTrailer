import React from 'react';
import './player.css'
const getVideoSrc = (src) => {
    const [, videoId] = src.split('=');
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&showinfo=0&autohide=1`;
  };
export  const Videoplayer=({src})=>{
    return(
        <div className='player'>
        <div className="player-wrapper">
        <iframe width="100%" height="100%" allowFullScreen
        src={getVideoSrc(src)}/>
        </div>
        </div>
    )
}