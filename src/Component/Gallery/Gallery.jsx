import React from "react";
import "./Gallery.css";
import innova from "../assets/innova.jpg";
import swift from "../assets/swift.jpg"
import etios from "../assets/etios.jpg"
function Gallery() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div class="card">
              <img src={innova} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"> Innova </h5>
                <p class="card-text">
                Toyota Innova is a car I dreamt of from the time I was a kid. 
                The popularity of the car says it all.
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"> Chilled AC </li>
                <li class="list-group-item"> Luxury Seats</li>
                <li class="list-group-item"> LED Facility </li>
              </ul>
              <div class="card-body">
                <a href="#" class="card-link">
                  Book For Tour
                </a>
                <a href="#" class="card-link">
                  Calling
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card">
              <img src={swift} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"> Swift </h5>
                <p class="card-text">
                I love swift that's really comfortable and usually.Thanks
                 ☺️i love swift that was my fev car ever.
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Luxury Feel </li>
                <li class="list-group-item">Full Comfort Zone</li>
                <li class="list-group-item">Luxury Seats</li>
              </ul>
              <div class="card-body">
                <a href="#" class="card-link">
                  Book for Tour
                </a>
                <a href="#" class="card-link">
                  Calling
                </a>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div class="card">
              <img src={etios} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"> Etios </h5>
                <p class="card-text">
                Toyota Etios Liva pickup and speed control are great and power of this car is awesome.
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Heigh Pickup</li>
                <li class="list-group-item">Luxury comfort</li>
                <li class="list-group-item">All facility</li>
              </ul>
              <div class="card-body">
                <a href="#" class="card-link">
                  Book for Tour
                </a>
                <a href="#" class="card-link">
                  Calling
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
