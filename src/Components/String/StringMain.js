import React, { Component } from "react";
import Pocket from "./Pocket";
import Mesh from "./Mesh";
import AssortStrings from "./AssortStrings";
import Specialty from "./Specialty";
import "./StringMain.scss";
import Nav from "../Nav/Nav";
import Axios from "axios";
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
      Comments: "",
      itemid: 0
    };
  }

  handleChange = (prop, val) => {
    this.setState({
      [prop]: val
    });
  };

  getID = ()=>{
    
  }

   handleSubmit=()=>{
    const {pocketPlacement, meshType, meshColor, sidewallColor, shootingStrings, specialtyStyle, whip} = this.state
     Axios.post('/api/addStringJob', {
      pocketPlacement: pocketPlacement,
      meshType: meshType,
      meshColor: meshColor,
      sidewallColor: sidewallColor,
      shootingStrings: shootingStrings,
      specialtyStyle: specialtyStyle,
      whip: whip
    }).then(res=>
      console.log(res.data))
      alert('successfully submitted, now add to cart!')
  }

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
        please submit options before adding to cart.
          <div className='buttons'>
            <button style={style} onClick={()=>this.handleSubmit()}>
              Submit
            </button>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
    );
  }
}

let style = {
  marginTop: "15px"
};

export default StringMain;
