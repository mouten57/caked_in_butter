import React from 'react';
import RecipeLayout, {
  imageStyle
} from '../../components/recipes/RecipeLayout';
import index from '../../components/recipes/recipeIndex';
import Img from 'gatsby-image';

export default props => {
  let base = index.TurtleBrownies;
  const { category, title, ingredients, instructions, notes } = base;

  return (
    <RecipeLayout
      category={category}
      title={title}
      yields="12 brownies"
      prep="40 minutes (Includes caramel cooling time) "
      time="30 minutes"
      item1name="Carmel:"
      item1short="Carmel:"
      item2name="Brownies:"
      item2short="Pecans:"
      item3name="Brownies: "
      item3short="Brownies:"
      item1ingredients={ingredients.Carmel}
      item2ingredients={ingredients.Brownies}
      first_note="Heat oven to 200 degrees (for pecans)"
      item1instructions={instructions.Caramel}
      item2instructions={instructions.Pecans}
      item3instructions={instructions.Brownies}
      between_2_and_3_note="Turn oven up to 350 while the caramel is in the freezer."
      assemble={instructions.Assemble}
      notes={notes}
    >
      <Img
        style={imageStyle}
        imgStyle={imageStyle.imageDiv}
        fluid={props.data.main.childImageSharp.fluid}
      />

      <p className="entry-body">
        This week I have craved something so rich and chocolatey. Honestly, I
        don’t know when I’m not craving something rich and chocolatey… but it’s
        been on another level this week. I’m constantly torn between my desire
        to be healthy and my innate, even deeper desire to eat all of the
        delicious sweet things. So here I am, once again, eating the sweets.
        This week I am bringing out all the stops for this loaded brownie!
      </p>
      <p className="entry-body">
        Are you a fan of brownies?? My Dad always loved them so we’d make them -
        from the box - often. My mom used to buy those big boxes of brownie
        mixes from Sam’s Club and it was basically like Christmas every time
        we’d remember there was one more mix at the bottom of the box. If you
        haven’t noticed by now… a large majority of my childhood memories
        revolve around food. Its fine. If ya’ll are as big a fan of chocolate as
        I am then you’re going to love this decadent brownie! It is packed with
        smooth sea salt caramel and toasted pecans. SO YUMMY!
      </p>

      <Img
        style={imageStyle}
        imgStyle={imageStyle.imageDiv}
        fluid={props.data.image1.childImageSharp.fluid}
      />

      <p className="entry-body">
        I had never made caramel before because it sounded so hard… the heating
        and cooling intimidated me- like maybe the caramel would burn. I’ve seen
        tons of people burn caramel on the various cooking competitions and I’m
        thinking, “Yeah I mean if THEY can’t do it then I definitely cannot.” I
        was wrong!! Ya’ll, this is so simple to put together- I know ya’ll can
        do it too.
      </p>
      <p className="entry-body">
        There are 3 components in this recipe:
        <ol>
          <li>Toasted pecans</li>
          <li>Salted caramel</li>
          <li>Fudge Brownie</li>
        </ol>
      </p>

      <Img
        style={imageStyle}
        imgStyle={imageStyle.imageDiv}
        fluid={props.data.image2.childImageSharp.fluid}
      />

      <p className="entry-body">
        In order to simplify this I like to use nuts that are already chopped so
        I don’t have to worry about that step. We’re going to toast our pecans
        before adding them to the top of our brownies. The caramel is best when
        prepared 30 minutes ahead of time so it will solidify before we add them
        to the batter. The brownie mix can be tossed together while the caramel
        is in the freezer.
      </p>
      <p className="entry-body">
        I know you’ll have just as much fun as I did conquering that caramel!
      </p>
    </RecipeLayout>
  );
};

export const query = graphql`
  query RecipeImagesTurtleBrownies {
    main: file(
      relativePath: { eq: "recipeImages/turtleBrownies-card-image.jpg" }
    ) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image1: file(relativePath: { eq: "recipeImages/turtleBrownies-img1.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "recipeImages/turtleBrownies-img2.jpg" }) {
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
