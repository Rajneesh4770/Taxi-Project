import React from 'react'
import 'animate.css';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillCar,AiOutlinePlusCircle} from 'react-icons/ai';
function Navbar() {
  return ( 
  <>
    <div className='container-fluid'>
      <div className="row">
        <div className="col-lg-12 p-0">
    <nav className="navbar navbar-expand-lg navbar-light navbar1">
  <div className="container-fluid">
    <a className="navbar-brand animate__animated animate__flipOutY animate__infinite" > <AiFillCar/> Taxi </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <NavLink to="/Home">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >Home</a>
        </li>
        </NavLink>
        <NavLink to="/About">
        <li className="nav-item">
          <a className="nav-link activeName" >About</a>
        </li>
        </NavLink>
        <NavLink to="/Gallery">
        <li className="nav-item">
          <a className="nav-link active" > Gallery </a>
        </li>
        </NavLink>
      </ul>
      <form className="d-flex">
      <NavLink to="/Login">   
      <li className='nav-item'>     <button className="btn btn-outline-success btn1" type="submit"><AiOutlinePlusCircle/> Get Taxi Online </button> 
      </li> 
      </NavLink>
      </form>
    </div>
    
  </div>
</nav>
</div>
    </div>
    </div>
    </>
  )
}

export default Navbar