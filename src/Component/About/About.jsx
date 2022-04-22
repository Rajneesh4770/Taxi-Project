import React from 'react'
import yellow2 from "../assets/yellow2.jpg"
import yellow3 from "../assets/yellow3.jpg"
import yellow4 from "../assets/yellow4.jpg"
import yellow from "../assets/yellow4.jpg"
function About() {
  return (
    <>
    <div class="container overflow-hidden">
  <div class="row gy-5">
    <div class="col-lg-6 col-sm-12">
      <div class="p-3 border bg-light">Our services can make an impact in your financial, operation &fleet departments. Improve fleet performance while driving down costs with Vector Fleet Management. ASE & EVT Certified Techs.
        <img src={yellow2} class="card-img-top" alt='' />
       </div>
    </div>
    <div class="col-lg-6 col-sm-12">
      <div class="p-3 border bg-light">The Department of Transportation in Taipei City has set up EV DC chargers at Dazhi Taxi Service Station, providing fleet charging support for mainstream EVs. The load is controlled by DeltaGrid® EV management system in order to prevent any overloads at the station. This user-friendly hardware and software solution simplifies EV charging for taxi drivers.</div>
      <img src={yellow3} className="card-img-top" alt="" />
    </div>
    <div class="col-lg-6 col-sm-12">
      <div class="p-3 border bg-light">With the help of Capterra, learn about KBCD TOUR & TAXI MANAGER, its features, pricing information, popular comparisons to other Fleet Management products and more. Still not sure about KBCD TOUR & TAXI MANAGER? Check out alternatives and read real reviews from real users.</div>
      <img src={yellow4} className="card-img-top" alt=''/>
    </div>
    <div class="col-lg-6 col-sm-12">
      <div class="p-3 border bg-light">Find out what works well at TAXI FLEET MANAGEMENT from the people who know best. Get the inside scoop on jobs, salaries, top office locations, and CEO insights. Compare pay for popular roles and read about the team’s work-life balance. Uncover why TAXI FLEET MANAGEMENT is the best company for you.</div>
      <img src={yellow4} className="card-img-top" alt=''/>
    </div>
  </div>
</div>
    
    </>
  )
}

export default About