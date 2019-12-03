import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
    render() {
      return(
        <div>
          <div className="container-image"> 
            <div className="background-image">
            <div className="overlay"></div>
            </div>
          </div>
      
          <div className="hero-content text-left">
              <h1 className="text-left">Lorem ipsum</h1>
              <h5 className="font-italic font-weight-bold">Cras in commodo justo</h5>
              <p>Sed ultricies iaculis mauris, a aliquam mi interdum sed, congue nibh eget.</p>
          </div>

          <ul className="dots">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
          </ul>
 
        </div>
      );
    }
  }

export default Hero;
