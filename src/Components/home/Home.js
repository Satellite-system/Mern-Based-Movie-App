import React from 'react'
import './home.css'
import Container from '../Movie_container/Container'

function Home() {
  return (
    <div className='home'>
      <h2>Most Recent Movies</h2>
       <div className="home_items">
        <Container/>
         <Container/>
         <Container/>
         <Container/>
         <Container/>
         <Container/>
         <Container/>
         <Container/>
      </div> 
    </div>
  )
}

export default Home