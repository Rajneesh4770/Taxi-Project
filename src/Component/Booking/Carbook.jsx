import React from 'react'
import './Carbook.css'
function Carbook() {
  return (
    <>
    
    <section className="background">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form className="row g-3" onSubmit={getData}>
                <div className="col-md-6">
                  <label for="inputName" className="form-label">
                     Name
                  </label>
                  <input
                    type="text"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="inputName"
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputEmail" className="form-label">
                    E-Mail
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="inputPassword4"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputNumber" className="form-label">
                    Passenger
                  </label>
                  <input
                    type="number"
                    value={passenger}
                    onChange={(e) => setPassenger(e.target.value)}
                    className="form-control"
                    id="inputNumber"
                    maxLength={1}
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputAddress" className="form-label">
                    PickupAddress
                  </label>
                  <input
                    type="address"
                    value={pickupAdress}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    id="inputAddress"
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputAddress" className="form-label">
                    DestinationAddress
                  </label>
                  <input
                    type="Address"
                    value={destinatioAddress}
                    onChange={(e) => setDestinationAddress(e.target.value)}
                    className="form-control"
                    id="destinationAddress"
                  />
                </div>
                <div class="col-md-6">
                  <label for="date" className="form-label">
                    Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="form-control"
                    id="date"
                  />
                
                </div>

                <div className="col-12">
                  <button
                    type="submit"

                    className="btn btn-primary"
                  >
                    Booked Now
                  </button>
                </div>
                </form>
            </div>
          </div>
        </div>
        </section>       
    
    </>
  )
}

export default Carbook