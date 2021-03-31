//imrc
import React, { Component } from 'react';
import './css/footer.css';

//cc
class Footer extends Component {
    render() { 
        return (
            <React.Fragment>
                {/* <div className="flexContainer">
                    <div className="footer-cr">
                        2021 All rights reserved.
                    </div>
                    <label className="footer-name">Marlo Baguyos.</label>
                </div> */}
                <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark fixed-bottom">
                <div class="container-fluid">
                    <div>
                        <p class="navbar-brand">Lapu Lapu</p>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <p class="nav-link active" aria-current="page" href="#">2021 All rights reserved</p>
                            </li>
                            <li class="nav-item">
                            <p class="nav-link active" aria-current="page" href="#">Marlo Baguyos</p>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
                </div>
            </React.Fragment>
        );
    }
}
export default Footer;