import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Axios from "axios";
// const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;


export default class TakeMoney extends React.Component {
  // onToken = (token) => {
  //   fetch('/charge', {
  //     method: 'POST',
  //     body: JSON.stringify(token),
  //   }).then(response => {
  //     response.json().then(() => {
  //       alert(`We are in business, fin`);
  //     });
  //   });
  // }

  onToken = token => {
    console.log('token', token);
    token.card = void 0;
    const amount = this.props.totalPrice *100;
    Axios.post('/charge', { token: token, amount: amount })
      .then(charge => { console.log('charge', charge.data) });
  }
  

  render() {
    return (
      
      <div>
      Total: ${this.props.totalPrice}.00
        
          <StripeCheckout
            amount={this.props.totalPrice*100} // cents
            currency="USD"
            stripeKey={'pk_test_WXvLLCUpVfskSePkaGtc31Fo'}
            shippingAddress={true}
            billingAddress={true}
            zipCode={true}
    
            token={this.onToken} // submit callback
            // opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
            // closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
          > <button>PAY</button></StripeCheckout>
      </div>
    );
  }
}
