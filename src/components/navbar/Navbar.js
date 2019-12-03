import React, { Component } from 'react';
import './Navbar.css';
import logo from '../../images/logo-snoop.png';


class Navbar extends Component {
    render() {
      return(

        <nav className="navbar navbar-expand-lg navbar-light">

          <a className="navbar-brand" href="snoop.com">
            <img src={logo} className="logo" width="30" height="30" alt="Logo Snoop" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav font-italic">
              <li className="nav-item active">
                <a className="nav-link" href="snoop.com">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="snoop.com">Quienes Somos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="snoop.com">Nuestros Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="snoop.com">Contacto</a>
              </li>
            </ul>
          </div>
        
        </nav>
        

      );
    }
  }

export default Navbar;
