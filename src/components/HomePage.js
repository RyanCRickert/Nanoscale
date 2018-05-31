import React from "react";
import { Link } from "react-router-dom";
import probe from "../../public/images/probe.jpg";
import innovations from "./Innovations.js";

export default () => (
  <div>
    <div className="home-blank content-container">
      <h1 className="home-header">Fast and Reliable Prototyping Services</h1>
        We provide fast prototype engineering and consulting services in the area of micro- 
        and nano-fabrication and characterization. Our services assist clients to develop and 
        realize a concept using simulation, CAD, process design, process integration, fabrication 
        and qualification of prototypes. We can further conduct small-volume production and technology 
        transfer (e.g. selecting foundries, or assisting clients in hiring and training of their own process 
        technicians for increasing production).
      <div className="grid">
        <div className="grid-fifty" style={{ paddingRight : "2rem" }}>
            <h1 className="grid-header">Why Nanoscale Solutions?</h1>
              With over 35 years of combined microfabrication experience, we are able to offer services 
              based upon our access to multiple academic microfabrication and metrology facilities, which 
              allow us to optimize facility choices, provide material flexibility, and offer fast turnaround 
              times. Our diverse knowledge and backgrounds allow us to provide design suggestions and tips in 
              order to make your prototypes work as quickly as possible. <Link to="why">Learn More</Link>
        </div>
        <div className="grid__fifty">
          <img src={probe} className="show-for-larger"/>
        </div>
      </div>
    </div>
    <div className="home-color">
      <div className="content-container">
          <h1>We Are Technology Innovators</h1>
            Nanoscale Solutions designs and manufactures semiconductor solutions for consumer, industrial, defense, biosciences, and other markets, including:
        <div className="grid">
          <div className="grid-list">
          {innovations.map((innovation, index) => (
            <li key={index}>{innovation}</li>
          ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);