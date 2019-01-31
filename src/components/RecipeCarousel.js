import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Slider from 'react-slick';
import './recipeCarousel.css';

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
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    adaptiveHeight: true,
    appendDots: dots => (
      <div
        style={{
          borderRadius: '10px',
          padding: '10px 10px 30px'
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
  const CarouselItem = props => (
    <div className="carousel-item">
      <a href={props.slug}>
        <Img
          fixed={props.fixed}
          style={{ display: 'inherit', margin: '20px auto 0' }}
        />

        <EntryHeader category={props.category} title={props.title} />
      </a>
    </div>
  );

  return (
    <StaticQuery
      query={graphql`
        query {
          allFile(filter: { relativeDirectory: { eq: "recipeImages" } }) {
            edges {
              node {
                childImageSharp {
                  fixed(width: 325) {
                    originalName
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        // for (let node of data.allFile.edges) {
        //   console.log(node.node.childImageSharp.fixed.originalName);
        // }

        const filterImage = filename => {
          let ret = data.allFile.edges.filter(
            node => node.node.childImageSharp.fixed.originalName === filename
          );

          return ret[0].node.childImageSharp.fixed;
        };
        return (
          <div className="featured-subheader">
            <Slider {...settings}>
              <CarouselItem
                slug="/recipes/strawberry-donuts"
                fixed={filterImage('strwdonuts-card-image.jpg')}
                category={index.BakedStrawberryDonuts.category}
                title={index.BakedStrawberryDonuts.title}
              />

              <CarouselItem
                slug="/recipes/biscotti"
                fixed={filterImage('biscotti-card-image.jpg')}
                category={index.Biscotti.category}
                title={index.Biscotti.title}
              />
            </Slider>
          </div>
        );
      }}
    />
  );
};
