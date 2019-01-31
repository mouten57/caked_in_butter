import React from 'react';
import RecipeLayout, {
  imageStyle
} from '../../components/recipes/RecipeLayout';
import index from '../../components/recipes/recipeIndex';
import Img from 'gatsby-image';
import './biscotti.css';

export default props => {
  let base = index.Biscotti;
  const { category, title, ingredients, instructions, notes } = base;

  return (
    <RecipeLayout
      category={category}
      title={title}
      yields="18 Cookies"
      prep="20 minutes"
      time="45 minutes"
      item1name=""
      item1short=""
      item1ingredients={ingredients.Biscotti}
      item1instructions={instructions.Biscotti}
      item2ingredients={ingredients.DonutIcing}
      item2instructions={instructions.DonutIcing}
      notes={notes}
    >
      <div style={imageStyle}>
        <Img
          style={{ display: 'inherit' }}
          fixed={props.data.main.childImageSharp.fixed}
        />
      </div>

      <p className="entry-body">
        Valentine’s Day - the day you show your love to those around you. You
        shower them with diamonds, flowers, champagne and chocolate.. which is
        why today we’re making the most delicious dark chocolate & cherry
        biscotti to add to your romantic V-day breakfast.
      </p>

      <div style={imageStyle}>
        <Img
          style={{ display: 'inherit' }}
          fixed={props.data.image1.childImageSharp.fixed}
        />
      </div>

      <p className="entry-body">
        I’ve never been a huge fan of Valentine’s Day. I try to show my love to
        my husband and daughter every day of the year but I’d be lying if I said
        I didn’t enjoy a holiday that gives me permission to eat all things
        chocolate. As if I even needed an excuse. My sweet tooth is hard to get
        under control. As far as sweets go there are few things I love more than
        chocolate... but chocolate... on a cookie... filled with cherries...{' '}
        <br />
        Count. Me. In.
      </p>
      <p className="entry-body">
        {' '}
        If you don’t like chocolate, I’m not sure we were really ever friends...
      </p>

      <div style={imageStyle}>
        <Img
          style={{ display: 'inherit' }}
          fixed={props.data.image2.childImageSharp.fixed}
        />
      </div>
      <p className="entry-body">
        {' '}
        For those of you who haven’t seen this crunchy cookie being sold at
        Starbuck’s counters all over the country, biscotti is an Italian cookie
        that is traditionally dry, crunchy and twice-baked. I was scared of
        making it- it seemed likes lot of work. But once I did it it wasn’t hard
        at all! The process can seem intimidating but let’s break it down.
      </p>
      <p className="entry-body">
        Steps of Biscotti:
        <ol>
          <li>Mix dough</li>
          <li>Split it in half</li>
          <li>Flatten into slabs</li>
          <li>Bake</li>
          <li>Slice</li>
          <li>Bake again</li>
        </ol>
      </p>
      <p className="entry-body">
        An important aspect to this recipe is cutting in the butter! If you
        don’t have a pastry cutter you can also use two forks. Cutting in the
        butter means you’re adding it in it cold and literally cutting it into
        the dough. The dough will be crumbly at first but that’s ok- you want
        that butter to stay cold until it gets into the oven. This creates
        pockets of crumbly flakes. This is also how biscuits and pie crusts are
        made! Fun fact: cutting in the butter shortens the strands of gluten one
        liquid is added to the flower- this is what creates a crumbly cookie! As
        I like to say when I try to sound smart... Science.
      </p>
      <p className="entry-body">
        Anyway, this dough tends to be very sticky because of the wet
        ingredients. If you find that it is too sticky to handle, you can add a
        bit more flour but be careful not to add too much because if the dough
        gets too dry the slabs will fall when you slice them before their second
        bake.
      </p>
      <p className="entry-body">
        <strong>Second bake!</strong>
      </p>
      <p className="entry-body">
        The first bake is 25-30 minutes, a 10 minute rest (so the slabs can cool
        just a little bit before you slice) and then another 8-10 minutes on
        each side. Sooo thats about 40-50 minutes of cook-time for this little
        cookie. I know it sounds like a long time because you just want to
        devour them but I promise they need the second bake! The butter and oil
        will help keep them crunchy and crumbly without tasting like cardboard.
        Finishing the slabs off with an egg-wash will make them nice and shiny!
        I highly recommend.
      </p>
      <p className="entry-body">
        I love love love this recipe because it takes basically no time to put
        together... you don’t have to drag out the mixer and you don’t have to
        chill the dough. Do you need any more convincing to make these? If so, I
        don’t think I can help you.
      </p>
      <p className="entry-body">Ok. Enough talk. Lets bake!</p>
    </RecipeLayout>
  );
};

export const query = graphql`
  query RecipeImagesBiscotti {
    main: file(relativePath: { eq: "recipeImages/biscotti-card-image.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 320) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image1: file(relativePath: { eq: "recipeImages/biscotti-img1.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 320) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image2: file(relativePath: { eq: "recipeImages/biscotti-img2.jpg" }) {
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
