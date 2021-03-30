//imrc
import React, { Component } from 'react';
import './css/footer.css';

//cc
class Footer extends Component {
    render() { 
        return (
            <React.Fragment>
                <div className="flexContainer">
                    <div className="footer-cr">
                        2021 All rights reserved.
                    </div>
                    <label className="footer-name">Marlo Baguyos.</label>
                </div>
            </React.Fragment>
        );
    }
}
export default Footer;