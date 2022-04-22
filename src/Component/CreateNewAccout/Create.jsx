import React, { useState } from "react";
import "./Create.css";
import axios from "axios";
function Create() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [password, setPassword] = useState();
   const [role, setRole] = useState();
  // const[file,setFile]=useState();


 function getData(e){
    e.preventDefault();
    console.log(email, password, firstName, lastName, number, role);
    axios.post('https://taxiooker123.herokuapp.com/registeruser',{firstName,lastName,email,number,password,role})
    .then(res=>{
      console.log(res);
    })
    .catch((error)=>{
      console.log(error)
    })
  
 }
  return (
    <>
      <section className="background">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form className="row g-3" onSubmit={getData}>
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="form-control"
                    id="inputPassword4"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">
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
                <div class="col-md-6">
                  <label for="inputPassword4" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    id="inputPassword4"
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputPhoneNumber" className="form-label">
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
                <div class="col-md-6">
                  <label for="inputRole" className="form-label">
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
                {/* <div class="col-md-12">
                  <label for="file" className="form-label">
                    Image file
                  </label>
                  <input
                    type="file"
                    value={file}
                    onChange={(e) => setFile(e.target.value)}
                    className="form-control"
                    id="inputfile"
                  />
                </div> */}
                {/* <div class="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" value={zip} onChange={(e)=>setZip(e.target.value)} className="form-control" id="inputZip"/>
  </div>  */}
                {/* <div className="col-lg-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Term & Condition
      </label>
    </div>
  </div> */}
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
    </>
  );
}

export default Create;
