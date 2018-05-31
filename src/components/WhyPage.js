import React from "react";
import cost from "../../public/images/stock/cost.jpg";
import mission from "../../public/images/stock/mission.jpg";
import prop from "../../public/images/stock/prop.jpg";
import quality from "../../public/images/stock/quality.jpg";
import speed from "../../public/images/stock/speed.jpg";

export default () => (
  <div>
    <div className="content-container">
      <div className="grid__why">
        <div className="grid-fifty__why">
          <img src={mission} />
        </div>
        <div className="grid-fifty__why" style={{ padding: "1.5rem"}}>
          <h1>Mission Statement</h1>
          We provide fast and reliable, low-volume prototypes & research capabilities not found in conventional foundries that can be made with a variety of materials.
        </div>
      </div>
      <div className="grid__why">
        <div className="grid-fifty__why" style={{ padding: "1.5rem"}}>
          <h1>Expertise and Quality</h1>
          With over 35 years of combined microfabrication experience in a variety fields and device types, our experience in device device to test helps to ensure that you get what you want in a prototype.
        </div>
        <div className="grid-fifty__why">
          <img src={quality} />
        </div>
      </div>
      <div className="grid__why">
        <div className="grid-fifty__why">
          <img src={cost} />
        </div>
        <div className="grid-fifty__why" style={{ padding: "1.5rem"}}>
          <h1>Cost</h1>
          Expertise and understanding of both devices and fabrication to minimize design costs. Strong cost models to design processes in the most cost-efficient manner while utilizing academic cleanrooms.
        </div>
      </div>
      <div className="grid__why">
        <div className="grid-fifty__why" style={{ padding: "1.5rem"}}>
          <h1>Speed</h1>
          Working in an academic cleanroom doesn’t mean slow. Our experience in university fabs means fast turnaround for even complex prototypes.
        </div>
        <div className="grid-fifty__why">
          <img src={speed} />
        </div>
      </div>
      <div className="grid__why">
        <div className="grid-fifty__why">
          <img src={prop} />
        </div>
        <div className="grid-fifty__why" style={{ padding: "1.5rem"}}>
          <h1>Proprietary</h1>
          Your intellectual property and information are as important as delivering a quality prototype. We keep your device and microfabrication designs safe.
        </div>
      </div>
    </div>
  </div>
);