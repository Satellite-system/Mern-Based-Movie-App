import React from 'react'
import './container.css'

function Container() {
  const link = "https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg";

  return (
    <div className='Container'>
      <div className="container_upper" >
        <img src="https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg" alt=""/>
        <div className="container_ratingBx">
          <span>4.5</span>
        </div>
      </div>
      <div className="container_lower">
      <span>Fight Club</span>
      </div>
    </div>
  )
}

export default Container