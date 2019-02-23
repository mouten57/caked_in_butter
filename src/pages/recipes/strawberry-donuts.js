import React from 'react';
import RecipeLayout, {
  imageStyle
} from '../../components/recipes/RecipeLayout';
import index from '../../components/recipes/recipeIndex';
import Img from 'gatsby-image';

//map cards for recipes
export default props => {
  let base = index.BakedStrawberryDonuts;
  const { category, title, ingredients, instructions, notes, closing } = base;

  return (
    <RecipeLayout
      category={category}
      title={title}
      yields="8-10 servings"
      prep="10 minutes"
      time="10-12 minutes"
      item1name="Strawberry Donut:"
      item1short="Donut: "
      item1ingredients={ingredients.StrawberryDonut}
      item1instructions={instructions.StrawberryDonut}
      item2name="Donut Icing:"
      item2short="Icing:"
      item2ingredients={ingredients.DonutIcing}
      item2instructions={instructions.DonutIcing}
      notes={notes}
      closing={closing}
    >
      <Img
        style={imageStyle}
        imgStyle={imageStyle.imageDiv}
        fluid={props.data.main.childImageSharp.fluid}
      />

      <p className="entry-body">
        Who doesn’t love a good donut? Whether you’re loyal to Shipley’s, Krispy
        Kreme, or Dunkin Donuts these baked strawberry donuts are sure to
        please! It may seem silly but donuts have always reminded me of my
        childhood. I grew up on the East Coast in North Carolina where Krispy
        Kreme is king - the ‘HOT’ sign was too tantalizing to ignore. I have
        fond memories of Saturday morning drives with Dad to pick up donuts for
        the family before everyone was awake. What’s a Saturday morning without
        a glazed donut?
      </p>

      <Img
        style={imageStyle}
        imgStyle={imageStyle.imageDiv}
        fluid={props.data.image1.childImageSharp.fluid}
      />

      <p className="entry-body">
        These strawberry donuts were inspired by one of my sweet friends who is
        in her first trimester- she said she had a dream where she asked me to
        find a recipe for strawberry donuts with sprinkles. So here it is!
      </p>
      <p className="entry-body">
        For this recipe start with the best donut pan; I used the Nordic Ware
        pan which I loved but any donut pan will do. Keep in mind these donuts
        are baked, not fried, so they are going to have a different consistency-
        a bit more cakey but equally as delicious!
      </p>

      <Img
        style={imageStyle}
        imgStyle={imageStyle.imageDiv}
        fluid={props.data.image2.childImageSharp.fluid}
      />

      <p className="entry-body">
        My hips don’t need a deep fryer in my house so baked donuts it is.
      </p>
      <p className="entry-body">
        I used fresh strawberries here but next time I would use freeze dried or
        even high quality strawberry jam in its place. The fresh strawberries
        are high in water and although we want moist donuts we don’t want soggy
        ones. Using fresh fruit with high water content is always risky so don’t
        be afraid to experiment with different flavoring methods.
      </p>
      <p className="entry-body">
        Douse these beauties in the icing and top with all the sprinkles! These
        donuts are too delicious to not eat instantly but they will keep for 2-3
        days in an air tight container.
      </p>
      <p className="entry-body">Let’s get cookin!</p>
    </RecipeLayout>
  );
};

export const query = graphql`
  query RecipeImages {
    main: file(relativePath: { eq: "recipeImages/strwdonuts-card-image.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image1: file(relativePath: { eq: "recipeImages/strwdonuts-img1.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "recipeImages/strwdonuts-img2.jpg" }) {
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
