import React from 'react'
import './header.css'
import icon from '../../Assets/icon_bar.png' 

function Header() {
  return (
    <div className='header'>
      <img src={icon} alt="" className='header_img' />
      <div className="header_searchBx">
         
      </div>
   </div>
  )
}

export default Header