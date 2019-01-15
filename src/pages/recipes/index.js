import React from 'react';
import PageTemplate from '../../components/PageTemplate';
import Carousel from '../../components/RecipeCarousel';
import { Link, StaticQuery, graphql } from 'gatsby';
import RecipeCard from '../../components/recipes/RecipeCard';
import index from '../../components/recipes/recipeIndex';

//map cards for recipes
export default () => (
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
      <PageTemplate>
        <h1 className="page-title" />
        {/* Baked Strawberry Donuts */}
        <RecipeCard
          slug="/recipes/strawberry-donuts"
          fixed={data.allFile.edges[0].node.childImageSharp.fixed}
          category={index.BakedStrawberryDonuts.category}
          title={index.BakedStrawberryDonuts.title}
        />
      </PageTemplate>
    )}
  />
);
