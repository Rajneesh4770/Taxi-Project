import React, { useState } from "react";
import Otp from "../Booking/Confirmation/Otp";
import "./Create.css";
import axios from "axios";

function Create() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const[otp,setOtp]=useState("");
  const[state,setState]=useState(false);
  // const[file,setFile]=useState();


 function getData(e){
    e.preventDefault();
    console.log(email, password, firstName, lastName, number, role);
    axios.post('https://taxiooker123.herokuapp.com/registeruser',{firstName,lastName,email,number,password,role})
    .then((res)=>{
       console.log(res);
      if(res.data==='user already exists with same email'){
        alert('Already Exist')
      }
      else if (res.data==='Please enter all the required details'){
         alert('please fill the data')
         
        } 
        else
     {
       setOtp(res.data.otp)
      setState(true)
    }

      
    })
    .catch((error)=>{
      console.log(error)
    })
  
 }
  return (
    <>
      {
        state ===false?
        <section className="background">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form className="row g-3" onSubmit={getData}>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="form-control"
                   
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="form-control"
                    
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    id="inputPassword"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPhoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="form-control"
                    id="inputnumber"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputRole" className="form-label">
                    Role
                  </label>
                  <select
                    id="inputRole"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="form-control"
                  >
                    <option value="User"> User</option>
                    <option value="Driver">Driver</option>
                  </select>
                </div>

                <div className="col-12">
                  <button
                    type="submit"

                    className="btn btn-primary"
                  >
                    Sign in
                  </button>
                </div>
                </form>
            </div>
          </div>
        </div>
        </section>       
  
      :<Otp otp={otp}email={email}/>
      }
     
              
             
      
    </>
  );
}

export default Create;
