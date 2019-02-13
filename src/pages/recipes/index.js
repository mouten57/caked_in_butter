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
        {/* Dolly Drops */}
        <RecipeCard
          slug="/recipes/dolly-drops"
          fixed={findImage(data, 'dolly-card-image.jpg')}
          category={index.DollyDrops.category}
          title={index.DollyDrops.title}
        />
        {/* Turtle Brownies */}
        <RecipeCard
          slug="/recipes/turtle-brownies"
          fixed={findImage(data, 'turtleBrownies-card-image.jpg')}
          category={index.TurtleBrownies.category}
          title={index.TurtleBrownies.title}
        />
        {/* Red Velvet Cake Bites */}
        <RecipeCard
          slug="/recipes/red-velvet-cake-bites"
          fixed={findImage(data, 'cakeBites-card-image.jpg')}
          category={index.RedVelvetCakeBites.category}
          title={index.RedVelvetCakeBites.title}
        />
      </PageTemplate>
    )}
  />
);
