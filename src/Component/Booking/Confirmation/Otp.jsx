import React,{useState} from "react";
import ConfirmOtp from "./ConfirmOtp";
import axios from "axios";
import './Otp.css';
function Otp() {
  const [email, setEmail] = useState();
  const [state,setState]= useState(false);
  function getData(e){
      e.preventDefault();
      console.log(email)
      setState(true);
      axios.post('https://taxiooker123.herokuapp.com/verify',email,).then(res=>{
          console.log(res);
      })
      .catch((error)=>{
          console.log(error)
      })
  }
  return (
    <>
    {
        state===false? 

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
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              

              <button type="submit" class="btn btn-primary" onClick={getData} >
                Submit
              </button>
            
            </form>
          </div>
        </div>
      </div>
      :<ConfirmOtp/>

    } 
      
    </>
  );
}

export default Otp;
