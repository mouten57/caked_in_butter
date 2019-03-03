import React from 'react';
import RecipeLayout, {
  imageStyle
} from '../../components/recipes/RecipeLayout';
import index from '../../components/recipes/recipeIndex';
import Img from 'gatsby-image';

export default props => {
  let base = index.FlourlessChocolateChipCookies;
  const { category, title, ingredients, instructions, notes } = base;

  return (
    <RecipeLayout
      category={category}
      title={title}
      yields="9 squares"
      prep="10 minutes"
      time="25-30 minutes"
      item1name=""
      item1short=""
      item1ingredients={ingredients.Cookies}
      item1instructions={instructions.Cookies}
      notes={notes}
    >
      <Img
        style={imageStyle}
        imgStyle={imageStyle.imageDiv}
        fluid={props.data.main.childImageSharp.fluid}
      />
      <p className="entry-body">
        I’ve been on the hunt for a healthy cookie. One that I can consume
        endlessly without the guilt or the extra pounds on my hips. Something
        easy, gooey and filled with chocolate… guys… unfortunately this cookie
        is not it. Did I have you going? Sorry about that. I know these are
        flourless which would make one think they they’re healthy but rest
        assured that the powdered sugar makes up for that.
      </p>
      <Img
        style={imageStyle}
        imgStyle={imageStyle.imageDiv}
        fluid={props.data.image1.childImageSharp.fluid}
      />

      <p className="entry-body">
        {' '}
        Even though these aren’t technically healthy, they are certainly easy
        and this recipe only yields 9 cookies so you don’t have 24 cookies lying
        around waiting to be consumed for breakfast, lunch and dinner.
      </p>
      <p className="entry-body">
        I have a few tips for this recipe. Normally you can get away with not
        sifting the powdered sugar but since there are so few ingredients in
        this recipe I highly recommend you do so. Additionally, when you prepare
        your baking sheet with parchment paper I suggest you also spray with
        non-stick spray. I had a hard time removing my cookies from the sheet
        even with the paper. Learn from my mistakes!
      </p>

      <Img
        style={imageStyle}
        imgStyle={imageStyle.imageDiv}
        fluid={props.data.image2.childImageSharp.fluid}
      />

      <p
        className="entry-body"
        style={{ textAlign: 'center', marginTop: '5px' }}
      >
        Now you have all you need to throw these together! Get Bakin’!
      </p>
    </RecipeLayout>
  );
};

export const query = graphql`
  query RecipeImagesFlourlessChocolateChipCookies {
    main: file(
      relativePath: { eq: "recipeImages/flourlessCC-card-image.jpg" }
    ) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image1: file(relativePath: { eq: "recipeImages/flourlessCC-img1.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "recipeImages/flourlessCC-img2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
