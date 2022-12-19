import React from 'react'
import './container.css'

function Container({rate,title, posterImg}) {
  const link = "https://image.tmdb.org/t/p/original";

  const url = link + posterImg;
  return (
    <div className='Container'>
      <div className="container_upper" >
        <img src={url} alt="Poster Image"/>
        <div className="container_ratingBx">
          <span>{rate}</span>
        </div>
      </div>
      <div className="container_lower">
      <span>{title}</span>
      </div>
    </div>
  )
}

export default Container