import React from 'react';
import RecipeLayout, {
  imageStyle
} from '../../components/recipes/RecipeLayout';
import index from '../../components/recipes/recipeIndex';
import Img from 'gatsby-image';

export default props => {
  let base = index.DollyDrops;
  const { category, title, ingredients, instructions, notes } = base;

  return (
    <RecipeLayout
      category={category}
      title={title}
      yields="24 Cookies"
      prep="10 minutes"
      time="20 minutes {cooling time}"
      item1name=""
      item1short=""
      item1ingredients={ingredients.DollyDrops}
      item1instructions={instructions.DollyDrops}
      notes={notes}
    >
      <Img
        style={imageStyle}
        imgStyle={imageStyle.imageDiv}
        fluid={props.data.main.childImageSharp.fluid}
      />

      <p className="entry-body">
        My memory these days doesn’t serve me well. I have a newborn so I’m
        mostly surviving on coffee as strong as an ox and Jesus as strong
        as..well, Jesus. Unless something just bites me in the face I’m probably
        not going to remember that it happened...however, there are certain
        things that I will never ever forget and that is how my mom used to let
        me help her make these Uber easy and delicious Dolly Drops, commonly
        known as No Bake Cookies.
      </p>

      <Img
        style={imageStyle}
        imgStyle={imageStyle.imageDiv}
        fluid={props.data.image1.childImageSharp.fluid}
      />

      <p className="entry-body">
        {' '}
        I had to ask my mom where this name came from because every time I
        mentioned them to someone they’d look at me like I was crazy. My mom
        explained that while she was a camp counselor in high school they made
        these cookies and called them Dolly Drops because of the cows they had
        on the property. I think you know what I’m getting at here and since
        this is a food blog that's as much name clarification I will give.
      </p>

      <Img
        style={imageStyle}
        imgStyle={imageStyle.imageDiv}
        fluid={props.data.image2.childImageSharp.fluid}
      />

      <p className="entry-body">
        We used to make these all the time growing up and I loved them so much
        because I didn’t have to wait for them to bake. I could eat the batter
        immediately (because no eggs but lets be real we eat it anyway) and that
        would help me forget that I still had to wait for them to harden in the
        freezer. Clearly my issue with patience is another story...
      </p>

      <p className="entry-body">
        The point is, these could not be more fun to throw together and I’ll bet
        they bring back some childhood memories for you too! I love pulling out
        all the stops and baking fancy cookies, but sometimes we just want
        something easy, quick and with little ingredients.
      </p>
      <div style={imageStyle}>
        <Img
          style={imageStyle}
          imgStyle={imageStyle.imageDiv}
          fluid={props.data.image4.childImageSharp.fluid}
        />
      </div>
      <p className="entry-body">
        I can almost guarantee that you have all of these ingredients handy. The
        best part is..you just use one pot, one pan and 0 baking!
      </p>
    </RecipeLayout>
  );
};

export const query = graphql`
  query RecipeImagesDolly {
    main: file(relativePath: { eq: "recipeImages/dolly-card-image.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image1: file(relativePath: { eq: "recipeImages/dolly-img1.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "recipeImages/dolly-img2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image3: file(relativePath: { eq: "recipeImages/dolly-mix1.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: { eq: "recipeImages/dolly-mix2.jpg" }) {
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
