import React, { Component } from 'react';

class QuantityPicker extends Component {
    state = { 
        quantity: 1,
        name: 'Marlo'
    }
    render() { 
        return (
            <div>
                <button onClick={this.increaseQuantity} className="btn btn-sm btn-primary">++++</button>
                <label>{this.state.quantity}</label>
            </div>
        );
    }

    increaseQuantity = () => {
        console.log("button clicked");
        // this.state.quantity = 999; <-- DO NOT modify state directly

        this.setState({quantity:999});
    }
}

export default QuantityPicker