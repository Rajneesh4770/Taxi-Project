import React,{useState} from "react";

import axios from "axios";
import './Otp.css';
function Otp(props) {
  const [email, setEmail] = useState();
  const [state,setState]= useState(false);
  function getData(e){
      e.preventDefault();
      console.log(email)
      setState(true);
      axios.post('https://taxiooker123.herokuapp.com/verify',email).then(res=>{
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
                  aria-describedby="emailHelp" value={props.email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else. kdfjkdjjk
                </div>
              </div>
              

              <button type="submit" class="btn btn-primary" onClick={getData} >
                Submit
              </button>
            
            </form>
          </div>
        </div>
      </div>
      :   


      // confirm part
    <div className="container container1">
      
     {
    <div className = "d-none">
  { setTimeout(() => {
    alert("your OTP is :-" + props.otp)
    
}, 2000)}

   </div>
    } <div className="row">
       
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div class="d-flex justify-content-center align-items-center container">
              <div class="card card1 py-5 px-3">
                <h5 class="m-0">E verification</h5>
                <span class="mobile-text">
                  Enter the code we just send on your  
                  <b class="text-danger">.....@mail.com</b>
                </span>
                <div class="d-flex flex-row mt-5">
                  <input type="text" class="form-control" autofocus="" maxLength={1}/>
                  <input type="text" class="form-control" maxLength={1}/>
                  <input type="text" class="form-control" maxLength={1}/>
                  <input type="text" class="form-control" maxLength={1} />
                </div>
                <div class="text-center mt-5">
                  <span class="d-block mobile-text">
                    Don't receive the code?
                  </span>
                  <span class="font-weight-bold text-danger cursor">
                    Resend
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

    } 
     
    </>
  );
}

export default Otp;
