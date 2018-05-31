import React from "react";

export default class ContactPageItem extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
     point: ""
   }
 }

 onPointChange = (e) => {
  this.setState({ point: e.target.value });
}

 render() {
   return (
    <div className="contact-point">
      {this.props.point}<span style={{color: "red"}}>*</span><br/>
      <input
        onChange={this.onPointChange}
        className="contact-input"
        type="text"
        name="point"
        /><br/>
    </div>
   )
 }
}