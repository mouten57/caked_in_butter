import React, { Component } from 'react';
import Slider from 'react-slick';
import './recipeCarousel.css';

import bakery1 from '../../content/assets/bakery1.jpg';
import bakery2 from '../../content/assets/bakery2.jpg';
import bakery3 from '../../content/assets/bakery3.jpg';
import bakery4 from '../../content/assets/bakery4.jpg';

//need to get the first recipe set-up on here
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: '',
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      appendDots: dots => (
        <div
          style={{
            borderRadius: '10px',
            padding: '10px'
          }}
        >
          <ul style={{ margin: '0px' }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            width: '30px'
          }}
        >
          {i + 1}
        </div>
      )
    };
    return (
      <div className="featured-subheader">
        <h4> recipe carousel</h4>
        <Slider {...settings}>
          <div>
            <a href="/">
              <img src={bakery1} alt="bakery1" />
            </a>
          </div>
          <div>
            <img src={bakery2} alt="bakery2" />
          </div>
          <div>
            <img src={bakery3} alt="bakery3" />
          </div>
          <div>
            <img src={bakery4} alt="bakery4" />
          </div>
        </Slider>
      </div>
    );
  }
}
