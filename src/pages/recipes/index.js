import React from 'react';
import PageTemplate from '../../components/PageTemplate';

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
          fixed={data.allFile.edges[0].node.childImageSharp.fixed}
          category={index.BakedStrawberryDonuts.category}
          title={index.BakedStrawberryDonuts.title}
        />
      </PageTemplate>
    )}
  />
);
