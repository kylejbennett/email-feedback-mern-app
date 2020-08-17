import React, { Component } from 'react';
import StripeCheckout from "react-stripe-checkout";
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {
        return(
            <StripeCheckout
                name="Survey Emailer"
                description="Use test CC#4242 4242 4242 4242 with any combo of Exp and CCV to add 5 credits to your account"
                amount={ 500 }
                token={ token => this.props.handleToken(token) }
                stripeKey={ process.env.REACT_APP_STRIPE_PUB_KEY }
            >
                <button className="btn green darken-1">
                    Add Credits
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);
