import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Slider from 'react-slick';
import './recipeCarousel.css';

import bakery1 from '../../content/assets/bakery1.jpg';
import bakery2 from '../../content/assets/bakery2.jpg';
import bakery3 from '../../content/assets/bakery3.jpg';
import bakery4 from '../../content/assets/bakery4.jpg';

import EntryHeader from '../components/recipes/entryHeader';
import index from '../components/recipes/recipeIndex';

//need to get the first recipe set-up on here
export default props => {
  const settings = {
    className: '',
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 500,
    // autoplaySpeed: 5000,
    // cssEase: 'linear',
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
    <StaticQuery
      query={graphql`
        query {
          allFile(filter: { relativeDirectory: { eq: "recipeImages" } }) {
            edges {
              node {
                childImageSharp {
                  fixed(width: 300) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="featured-subheader">
          <Slider {...settings}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a href="/recipes/strawberry-donuts">
                <Img
                  fixed={data.allFile.edges[0].node.childImageSharp.fixed}
                  style={{ display: 'inherit', margin: '20px auto 0' }}
                />
              </a>
              <EntryHeader
                category={index.BakedStrawberryDonuts.category}
                title={index.BakedStrawberryDonuts.title}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a href="/recipes/strawberry-donuts">
                <Img
                  fixed={data.allFile.edges[0].node.childImageSharp.fixed}
                  style={{ display: 'inherit', margin: '20px auto 0' }}
                />
              </a>
              <EntryHeader
                category={index.BakedStrawberryDonuts.category}
                title={index.BakedStrawberryDonuts.title}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a href="/recipes/strawberry-donuts">
                <Img
                  fixed={data.allFile.edges[0].node.childImageSharp.fixed}
                  style={{ display: 'inherit', margin: '20px auto 0' }}
                />
              </a>
              <EntryHeader
                category={index.BakedStrawberryDonuts.category}
                title={index.BakedStrawberryDonuts.title}
              />
            </div>
          </Slider>
        </div>
      )}
    />
  );
};
