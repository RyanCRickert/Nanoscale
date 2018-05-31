import React from "react";
import ContactPageItem from "./ContactPageItem";

export default class ContactPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: "",
      points: {
        Name: "",
        Company: "",
        Phone: "",
        Email: ""
      }
    }
  }

  render() {
    const formPoints = ["Name", "Company", "Phone", "Email"];
    return (
    <div>
      {this.state.error && <p>{this.state.error}</p>}
      <div className="content-container">
        <div className="contact">
          <form>
            {formPoints.map((point, index) => (
              <ContactPageItem
                key={index}
                point={point}
                />
            ))}
            <h3>How can we help?</h3>
            Feel free to ask a question or just leave us a comment.<br/>
            <textarea />
            <br/>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
    )
  }

};