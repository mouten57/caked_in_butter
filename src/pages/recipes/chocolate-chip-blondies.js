import React from 'react';
import RecipeLayout, {
  imageStyle
} from '../../components/recipes/RecipeLayout';
import index from '../../components/recipes/recipeIndex';
import Img from 'gatsby-image';

export default props => {
  let base = index.Blondies;
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
      item1ingredients={ingredients.Blondies}
      item1instructions={instructions.Blondies}
      notes={notes}
    >
      <p className="entry-body">
        There are two adults in our household. However, I am the only one with a
        severe (like, real uncontrollable) sweet-tooth. Matt’s sweet-tooth comes
        out on a very rare occasion… usually he’s like, “nah, I just want one.”
        Um, excuse me? My brain cannot even comprehend that I could only eat ONE
        cookie. Logically I know it's possible, self-control and all of that,
        but seriously. Just one? I admire him for it because mine gets me in
        some serious trouble with my dentist and my jeans. But alas, I just love
        sweets.
      </p>

      <p className="entry-body">
        {' '}
        So even though Matt doesn’t have a crazy tooth like mine, he most
        definitely cannot just have one of these blondies when I make them! You
        might be thinking, “Emily, these look just like chocolate chip cookies.
        Why can’t I just make those?” to which I’d say, “Pipe down. These are
        easier than chocolate chips cookies.” and they really are!
      </p>

      <Img
        style={imageStyle}
        imgStyle={imageStyle.imageDiv}
        fluid={props.data.main.childImageSharp.fluid}
      />

      <p className="entry-body">
        These gooey squares only have 8 ingredients and I can almost guarantee
        you have all of them in your pantry right now! You can throw these
        together so quickly when that sweet-tooth knocks. I’m a huge fan of the
        classic chocolate chip blondie- however, there are so many flavor
        options for this bitties! Try your favorite candies and nuts!
      </p>

      <p className="entry-body">
        The next time I make them I’m going to try them with Heath bars… because
        toffee.
      </p>

      <Img
        style={imageStyle}
        imgStyle={imageStyle.imageDiv}
        fluid={props.data.image1.childImageSharp.fluid}
      />

      <p className="entry-body">
        There is only one special technique you should know about and that is
        the spoon and level method when measuring your flour. This will be
        beneficial to you in all your future bakes as well! A huge no-no is
        dipping your measuring cup into the container of flour and leveling it.
        When you do this it packs down the flour and you actually end up with
        way more flour than the recipe actually calls for.
      </p>
      <p className="entry-body">
        The spoon and level method asks you to spoon the flour and pour it into
        the measuring cup until its full and then leveling it off. This keeps
        the flour loose so you have just the right amount! The first time I made
        these I wasn’t thinking and didn't use this method and the blondies
        tasted like flour. No thank you!
      </p>
      <p className="entry-body">
        So word to the wise, always use the spoon and level method!
      </p>
      <p className="entry-body">Ok guys, lets bake!</p>
    </RecipeLayout>
  );
};

export const query = graphql`
  query RecipeImagesBlondies {
    main: file(relativePath: { eq: "recipeImages/blondies-img1.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image1: file(relativePath: { eq: "recipeImages/blondies-img2.jpg" }) {
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
