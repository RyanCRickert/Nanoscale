import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome"

export default () => (
  <div className="footer">
    <div className="content-container">
      <div className="footer__content">
        <div>
          <b><a href="mailto:questions@nanoscale-solutions.com">Nanoscale Solutions</a></b><br/>
          Cambridge, Ma<br/>
          1(888)555-1234
        </div>
        <div>
          <a href="https://www.linkedin.com/company/nanoscale-solutions/" target="blank"><FontAwesome name="linkedin" className="linkedin-fa"/></a>
        </div>
      </div>
    </div>
  </div>
);