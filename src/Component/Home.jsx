import React from "react";
import "./Home.css";
import innova from "./assets/innova.jpg";
import etios from "./assets/etios.jpg";
import swift from "./assets/swift.jpg";
import crysta from "./assets/crysta.jpg";
import "animate.css";
function Home() {
  return (
    <>
      <section className="image1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-heading">
                <h1 class="animate__animated  animate__zoomIn animate__repeat-2 ">
                  Best Taxi Services
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div class="card">
                  <img src={etios} class="card-img-top" alt="..." />
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <img src={swift} class="card-img-top" alt="..." />
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <img src={innova} class="card-img-top" alt="..." />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <section className="section2">
        <span className="welcome">
        <h1 class="animate__animated  animate__fadeOut animate__repeat-2 ">
                  Welcome 
                </h1>
                <h2 class="animate__animated  animate__fadeIn animate__repeat-2">
                  Our Services
                </h2>
        </span>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div class="card bg-dark text-white">
                <img src={crysta} class="card-img" alt="..." />
                <div class="card-img-overlay">
                  <h5 class="card-title">Crysta</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div class="card bg-dark text-white">
                <img src={swift} class="card-img" alt="..." />
                <div class="card-img-overlay">
                  <h5 class="card-title">Swift</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div class="card bg-dark text-white">
                <img src={innova} class="card-img" alt="" />
                <div class="card-img-overlay">
                  <h5 class="card-title">Innova</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
