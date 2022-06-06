import React,{useState} from "react";
import Login from '../Login'
import axios from "axios";
import './Otp.css';
function Otp(props) {
  const [email, setEmail] = useState(props.email);
  const [state,setState]= useState(false);
  const[otp,setOtp]=useState();

  
  function getData(e){
      e.preventDefault();
      console.log(email,otp)
      setState(true);
      axios.post('https://taxiooker123.herokuapp.com/verify',
  {email,otp}).then(res=>{
  console.log(res);
  
})
.catch((error)=>{
  console.log(error)
})
if(props.otp==otp){
  alert("Your Otp "+props.otp +" is verified")
 setState(true);
 }
 
  else{
    alert("invalid Otp")
  }
   }



 
 
  return (
    <>
    {
        state===false? 



<div className="container ">
<div className = "d-none">
 { setTimeout(() => {
  alert("your OTP is :-" + props.otp);
    
 }, 3000)}

   </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 mainotpfield"  >
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label-otp">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp" value={props.email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else. 
                </div>
              </div>

              <div className="row">
       
       <div className="col-lg-12 col-md-12 col-sm-12">
         <div className="d-flex justify-content-center align-items-center container">
           <div className="card card1">
             <h5 className="m-0">E verification</h5>
             <span className="mobile-text">
               Enter the code we just send on your <i class="fa-solid fa-envelope"></i>
               <b className="text-danger">.....@mail.com</b>
             </span>
             <div className="">
               <input type="text" value={otp} onChange={(e)=>setOtp(e.target.value)} className="form-control" />
               </div><br></br>
               
             <div className="text-center mt-5">
               <span className="d-block mobile-text">
                 Don't receive the code?
               </span>
               <span className="font-weight-bold text-danger cursor">
                 Resend
               </span>
             </div>
           </div>
         </div>
       </div>
     </div>
              

              <button  className="btn btn-primary" onClick={getData} >
                Submit
              </button>
            
            </form>
          </div>
        </div>
      </div>
      :   <Login/>
        
  

    } 
     
    </>
  );}
    

export default Otp;
