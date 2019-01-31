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
        <PageTemplate>
          <h1 className="page-title"> </h1>
          {/* Baked Strawberry Donuts */}
          <RecipeCard
            slug="/recipes/strawberry-donuts"
            fixed={filterImage('strwdonuts-card-image.jpg')}
            category={index.BakedStrawberryDonuts.category}
            title={index.BakedStrawberryDonuts.title}
          />
          <RecipeCard
            slug="/recipes/biscotti"
            fixed={filterImage('biscotti-card-image.jpg')}
            category={index.Biscotti.category}
            title={index.Biscotti.title}
          />
        </PageTemplate>
      );
    }}
  />
);
