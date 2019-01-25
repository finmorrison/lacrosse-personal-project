import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Axios from "axios";
import "./Womens.scss";
// import { connect } from "react-redux";
// import { getUser } from "./../../ducks/reducer";

export class Mens extends Component {
  constructor() {
    super();

    this.state = {
      cardArray: [
        {
          pocketplace: "",
          meshtype: "",
          meshcolor: "",
          sidewallcolor: "",
          shootingstringcolor: "",
          whip: "",
          specialtystyle: "",
          headtype: "",
          images: "",
          itemid: 0
        }
      ]
    };
  }

  async componentDidMount() {
    await Axios.get("/api/getWomensHeads").then(res => {
      // console.log(res.data);
      this.setState({
        cardArray: res.data
      });
    });
  }

  handleAddToCart(id) {
    // const { cardArray } = this.state;
    Axios.post("/api/addToCart", {
      itemid: id
    }).then(response => {
      console.log(response);
    });
  }

  render() {
    console.log(this.state.cardArray);
    const card = this.state.cardArray.map((e, i) => (
      <div>
        <div className="product-card" key={i}>
          <div className="product-card-text">
            <img src={e.images} alt="" />

            <div id="head">
              <div id="head-title">
                {e.headtype}
                {/* <button onClick={() => this.handleAddToCart(e.itemid)}>
                  Add to Cart!
                </button> */}
              </div>
              <div id="price">${e.itemprice}</div>
              <div className="stats-container">
                <div id="seperators">Place:{e.pocketplace}</div>
                <div id="seperators">
                  Mesh: {e.meshcolor} {e.meshtype}
                </div>
                <div id="seperators">Sidewall: {e.sidewallcolor}</div>
                <div id="seperators">Shooters: {e.shootingstringcolor}</div>
                <div id="seperators">Whip: {e.whip}</div>
                <div>Specialty Style: {e.specialtystyle}</div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => this.handleAddToCart(e.itemid)}>
          Add to Cart
        </button>
      </div>
    ));

    return (
      <div>
        <Nav />
        <h1 id="title">Women's Strung Heads</h1>
        <div className="allCards">{card}</div>
      </div>
    );
  }
}

// const mapStateToProps = reduxStore => reduxStore;

export default Mens;
