import React, { useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
// import crysta from '../assets/crysta.jpg'
import './Login.css';
function Login() {
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  function getData(e){
    e.preventDefault();
    console.log(email,password);
    axios.post('https://taxiooker123.herokuapp.com/loginuser',{email,password}).then(res=>{
      console.log(res)
    })
    .catch((err)=>{
      console.error(err);
    });
  }
  return (
    <>
    <section className='background '>
    <div className='container-fluid '>
      <div className="row">
        <div className="col-lg-12">
        <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    onChange={(e)=>setEmail(e.target.value)}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
    onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={getData}>Sign In</button><br/>
  <h6>-------------------------- or ---------------------------</h6><br/>
  <NavLink to="/Create">
    
  <button type="button" className="btn btn-success" >Create New Account</button><br/>
  </NavLink>
</form>

        </div>
      </div>
      
    </div>
    </section>

{/* <section>
      <div className="row">
    <div className="col-lg-12">
              <img src={crysta} className='image123'></img>
            </div>
        </div>
        </section> */}

    
    </>
  )
}

export default Login