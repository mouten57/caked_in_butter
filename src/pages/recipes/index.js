import React from 'react';
import PageTemplate from '../../components/PageTemplate';
import findImage from '../../utils/findImage';
import { StaticQuery, graphql } from 'gatsby';
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
    render={data => (
      <PageTemplate>
        <h1 className="page-title"> </h1>
        {/* Baked Strawberry Donuts */}
        <RecipeCard
          slug="/recipes/strawberry-donuts"
          fixed={findImage(data, 'strwdonuts-card-image.jpg')}
          category={index.BakedStrawberryDonuts.category}
          title={index.BakedStrawberryDonuts.title}
        />
        {/* Biscotti */}
        <RecipeCard
          slug="/recipes/biscotti"
          fixed={findImage(data, 'biscotti-card-image-2.jpg')}
          category={index.Biscotti.category}
          title={index.Biscotti.title}
        />
      </PageTemplate>
    )}
  />
);
