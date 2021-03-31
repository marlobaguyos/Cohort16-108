import React, { Component } from 'react';

class QuantityPicker extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <button onClick={this.increaseQuantity} className="btn btn-sm btn-primary">+</button>
                <label>Qp</label>
            </div>
        );
    }

    increaseQuantity() {
        console.log("button clicked");
    }
}

export default QuantityPicker