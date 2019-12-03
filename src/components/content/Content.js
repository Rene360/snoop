import React, { Component } from 'react';
import './Content.css';



class Content extends Component {
    render() {
      return(
        <div className="content">

          <div className="text">
            <div className="shape-right"></div>
            <div className="shape-left"></div>

            <p className="text-left">
              <span className="text-left font-weight-bold font-italic"> Pellentesque luctus</span> purus sed laoreet placerat.
              Vivamus ac ligula sapien. Proin pulvinar vitae risus sit amet consequat.
              Praesent facilisis mi a rhoncus viverra.
            </p>
          </div>

          <div className="content-image"></div>

        </div>
      );
    }
  }

export default Content;
