import React,{useState} from 'react'
import './Create.css'
function Create() {
const[email,setEmail]=useState();
const[password,setPassword]=useState();
const[FirstName,setFirstName]=useState();
const[LastName,setLastName]=useState();
const[city,setCity]=useState();
const[state,setState]=useState();
const[zip,setZip]=useState();
function getData(e){
  e.preventDefault()
  console.warn(email,password,FirstName,LastName,city,state,zip);
  
}
  return (
    <>
    <section className='background'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">

                <form className="row g-3" >
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">First Name</label>
    <input type="text" value={FirstName}  onChange={(e)=>setFirstName(e.target.value)} className="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" className="form-label">Last Name</label>
    <input type="text" value={LastName} onChange={(e)=>setLastName(e.target.value)} className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)} className="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="inputPassword4"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" value={city} onChange={(e)=>setCity(e.target.value) } className="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" value={state} onChange={(e)=>setState(e.target.value) } className="form-select" defaultValue={'DEFAULT'}>
    
        <option value="DEFAULT" disabled>Choose a salutation ...</option>
      <option>Andhra Pradesh</option>
      <option>Arunachal Pradesh	</option>
      <option>Chhattisgarh</option>
      <option>Goa</option>
      <option>Gujarat</option>
      <option>Haryana</option>
      <option>Himachal Pradesh</option>
      <option>Chandigarh</option>
      <option>Punjab</option>
      <option>J&k</option>
      <option>Delhi</option>
      <option>Uk</option>
      <option>Madhya Pradesh</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" value={zip} onChange={(e)=>setZip(e.target.value)} className="form-control" id="inputZip"/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Term & Condition
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="button" onClick={getData} className="btn btn-primary">Sign in</button>
  </div>
</form>

                </div>
            </div>
           
        </div>
    </section>
    </>
  )
}

export default Create