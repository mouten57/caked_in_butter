import React from 'react';
import RecipeLayout, {
  imageStyle
} from '../../components/recipes/RecipeLayout';
import index from '../../components/recipes/recipeIndex';
import Img from 'gatsby-image';

export default props => {
  let base = index.RedVelvetCakeBites;
  const { category, title, ingredients, instructions, notes } = base;

  return (
    <RecipeLayout
      category={category}
      title={title}
      yields="34 cake bites"
      prep="5 minutes"
      time="30 minutes"
      item1name="Cake Bites:"
      item1short="Cake Bites:"
      item1ingredients={ingredients.CakeBites}
      item1instructions={instructions.CakeBites}
      notes={notes}
    >
      <div style={imageStyle}>
        <Img
          style={{ display: 'inherit' }}
          fixed={props.data.main.childImageSharp.fixed}
        />
      </div>
      <p className="entry-body">
        Ya’ll these are crazy easy little cake bites. These mini red velvet
        cakes are moist and packed full of tiny chocolate chips! A girlfriend
        and I are obsessed with Nothing Bundt Cakes- their red velvet cake is to
        die for but sometimes you can’t run out at midnight to get it... Not
        that that’s something I’ve wanted to do…
      </p>
      <div style={imageStyle}>
        <Img
          style={{ display: 'inherit' }}
          fixed={props.data.image1.childImageSharp.fixed}
        />
      </div>
      <p className="entry-body">
        My husband loves red velvet cake, so babe, these are for you!
      </p>

      <p className="entry-body">
        When I say these are easy I mean they only require 4 ingredients. Say
        whaaat?! For this recipe we’re using a box cake mix because thats what
        makes these so quick to whip up, barely any measuring. If you’d like to
        make your batter from scratch- go for it! But if you’re in a pinch-
        these are for you!
      </p>
      <div style={imageStyle}>
        <Img
          style={{ display: 'inherit' }}
          fixed={props.data.image2.childImageSharp.fixed}
        />
      </div>
      <p className="entry-body" style={{ marginBottom: '5px' }}>
        There are so many flavor options to these yummy cake! Here are a few
        suggestions:
      </p>
      <p style={{ marginBottom: '5px' }}>
        <u>Cake Bite Flavor Combinations</u>
      </p>

      <ol style={{ marginTop: '0px' }}>
        <li>Vanilla Cake + Cream Cheese Icing + Rainbow Sprinkles </li>
        <li>Chocolate Cake + Salted Caramel Icing </li>
        <li>White Cake + Vanilla Icing + mini M&Ms</li>
      </ol>
    </RecipeLayout>
  );
};

export const query = graphql`
  query RecipeImagesRedVelvetCakeBites {
    main: file(relativePath: { eq: "recipeImages/cakeBites-card-image.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 320) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image1: file(relativePath: { eq: "recipeImages/cakeBites-img1.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 320) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image2: file(relativePath: { eq: "recipeImages/cakeBites-img2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 320) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
