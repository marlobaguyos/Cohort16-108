import React, { Component } from 'react';

class NavBar extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <nav class="navbar navbar-dark bg-dark fixed-top  navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Lapu Lapu</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Task</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;