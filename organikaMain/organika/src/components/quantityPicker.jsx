import React, { Component } from 'react';

class QuantityPicker extends Component {
    state = { 
        quantity: 1,
        name: 'Marlo'
    }
    render() { 
        return (
            <div>
                <button onClick={this.decreaseQuantity} className="btn btn-sm btn-primary">-</button>
                <label>{this.state.quantity}</label>
                <button onClick={this.increaseQuantity} className="btn btn-sm btn-primary">+</button>
            </div>
        );
    }

    increaseQuantity = () => {
        console.log("button clicked");
        // this.state.quantity = 999; <-- DO NOT modify state directly
        
        let current = this.state.quantity + 1; // read from the state 
        this.setState({quantity:current});
    }

    decreaseQuantity = () => {
        console.log("button clicked");
        // this.state.quantity = 999; <-- DO NOT modify state directly
        
        let current = this.state.quantity - 1; // read from the state 
        this.setState({quantity:current});
    }
}

export default QuantityPicker