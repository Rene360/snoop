import React, { Component } from 'react';
import './Carrousel.css';

import coffee from '../../images/art-blur-cappuccino-302899.jpg';
import Slider from "react-slick";


class Carrousel extends Component {


    render() {

      const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };



      return(
        <div className="">

            <div className="background-slider">

            <div className="container">
            
                  <h2>Nullam sed urna justo.</h2>

                  <Slider {...settings}>
                    <div className="item">
                      <div className="box-image">
                        <img src={coffee} className="img-fluid" alt="Coffee" />
                      </div>
                      <h5>$50</h5>
                    </div>
                    <div className="item">
                      <div className="box-image">
                        <img src={coffee} className="img-fluid" alt="Coffee" />
                      </div>
                      <h5>$70</h5>
                    </div>
                    <div className="item">
                      <div className="box-image">
                        <img src={coffee} className="img-fluid" alt="Coffee" />
                      </div>
                      <h5>$50</h5>
                    </div>
                    <div className="item">
                      <div className="box-image">
                        <img src={coffee} className="img-fluid" alt="Coffee" />
                      </div>
                      <h5>$70</h5>
                    </div>
                    <div className="item">
                      <div className="box-image">
                        <img src={coffee} className="img-fluid" alt="Coffee" />
                      </div>
                      <h5>$50</h5>
                    </div>
                    <div className="item">
                      <div className="box-image">
                        <img src={coffee} className="img-fluid" alt="Coffee" />
                      </div>
                      <h5>$70</h5>
                    </div>
                  </Slider>
      


            </div>
            </div>

        </div>

        
      );
    }
  }

export default Carrousel;
