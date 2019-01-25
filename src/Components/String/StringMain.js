import React, { Component } from "react";
import Pocket from "./Pocket";
import Mesh from "./Mesh";
import AssortStrings from "./AssortStrings";
import Specialty from "./Specialty";
import "./StringMain.scss";
import Nav from "../Nav/Nav";
// import cloudinary from 'cloudinary-react'

export class StringMain extends Component {
  constructor() {
    super();

    this.state = {
      pocketPlacement: "",
      meshType: "",
      meshColor: "",
      sidewallColor: "",
      shootingStrings: "",
      whip: "",
      specialtyStyle: "",
      Images: [],
      Comments: ""
    };
  }

  handleChange = (prop, val) => {
    this.setState({
      [prop]: val
    });
  };

  // handleSubmit = () => {
    
  //   );
  // };

  // cloudinary.createUploadWidget=({
  //   cloudName: 'dti5uijrd',
  //   uploadPreset: 'my_preset'}, (error, result) => { console.log(error, result) })

  // document.getElementById("upload_widget").addEventListener("click", function(){
  //     myWidget.open();
  //   }, false);

  render() {
    console.log(this.state);

    return (
      <div className="mainString">
        <Nav />

        {/* <div>
          <span>Add Image of head that you would like copied</span>
          <button onClick={() => this.uploadWidget()}>Add Image</button>
        </div> */}
        <div className = 'options'>
          <Pocket handleChange={this.handleChange} />
          <Mesh handleChange={this.handleChange} />
          <AssortStrings handleChange={this.handleChange} />
          <Specialty handleChange={this.handleChange} />
          <button style={style} onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

let style = {
  marginTop: "15px"
};

export default StringMain;
