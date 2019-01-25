import React, { Component } from "react";
import Nav from "../Nav/Nav";
import { addToCart, removeFromCart } from "./../../ducks/reducer";
import { connect } from "react-redux";
import Axios from "axios";
// import {Link} from 'react-router-dom'
// import Checkout from './Checkout'
// import { Elements, StripeProvider } from "react-stripe-elements";
import TakeMoney from "./CheckoutForm";
import './Cart.scss'

export class Cart extends Component {
  constructor() {
    super();

    this.state = {
      // cartArray: [],
      totalPrice: 0
    };
  }
  async componentDidMount() {
    this.getCart();
  }

  async getCart() {
    try {
      const res = await Axios.get("/api/getCart");
      this.props.addToCart(res.data);
    } catch (e) {
      console.log("something went wrong", e);
    }
  }

  async handleDelete(id) {
    const cartid = id;
    console.log(cartid);
    await Axios.delete(`/api/delete/${cartid}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(console.log("okay."));
    this.getCart();
  }

  async handlePurchase() {}

  componentDidUpdate(oldProps) {
    // console.log(oldProps.cart.length);
    // console.log(this.props.cart.length);
    if (oldProps.cart.length !== this.props.cart.length) {
      this.getCart();
    }
  }

  render() {
    // console.log(this.props.cart);

    const fullCart = this.props.cart.map((e, i) => {
      return (
        <div className='cartMain' key={i}>
          <div className='cartItems'>
            <div id = 'singleItem'>
              <img src={e.images} alt="" style={imageStyle} />
              <div id='itemInfo'>
                <div>{e.headtype}</div>
                <span> Price: ${e.itemprice}.00</span>
                <button onClick={() => this.handleDelete(e.cartid)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      );
    });
    const totalPrice = this.props.cart.reduce((acc, cartItem) => {
      return acc + cartItem.itemprice;
    }, 0);
    return (
      <div>
        <Nav />
       
              <TakeMoney totalPrice={totalPrice}/>
            
        {fullCart}
      </div>
    );
  }
}

const imageStyle = {
  height: 100
};

const mapStateToProps = reduxStore => reduxStore;

export default connect(
  mapStateToProps,
  { addToCart, removeFromCart }
)(Cart);
