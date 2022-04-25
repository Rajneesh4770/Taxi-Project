import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import './Otp.css';
function Otp() {
  const [email, setEmail] = useState();
  function getData(e){
      e.preventDefault();
      console.log(email)
  }
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 mainotpfield"  >
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label-otp">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label-otp">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>

             <NavLink to ='/ConfirmOtp'> <button type="submit" class="btn btn-primary" onClick={getData}>
                Submit
              </button></NavLink>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Otp;
