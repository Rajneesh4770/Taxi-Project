import React from 'react'
import {BsYoutube,BsTwitter,BsInstagram,BsFacebook} from 'react-icons/bs'
import './Footer.css'
function Footer() {
  return (
    <>
<nav class="navbar-light  footer">
  <div>
    
     <div className='items'>
        <h5> Links of Social Sites</h5>
        <ul>
        <li> <BsYoutube />  YouTube</li>
            <li> <BsFacebook/> Facebook</li>
            <li> <BsTwitter/> ..... Twiter</li>
            <li> <BsInstagram/> Instagram</li>


        </ul>
        </div>
  </div>
</nav>

    </>
  )
}

export default Footer