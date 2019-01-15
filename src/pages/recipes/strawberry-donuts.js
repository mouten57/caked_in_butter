import React from 'react';
import RecipeLayout from '../../components/recipes/RecipeLayout';
import index from '../../components/recipes/recipeIndex';

//map cards for recipes
export default props => {
  let base = index.BakedStrawberryDonuts;
  const {
    category,
    title,
    body,
    ingredients,
    instructions,
    notes,
    closing
  } = base;
  return (
    <RecipeLayout
      mainImage={props.data.main.childImageSharp.fixed}
      image1={props.data.image1.childImageSharp.fixed}
      image2={props.data.image2.childImageSharp.fixed}
      category={category}
      title={title}
      body1={body[0]}
      body2={body[1]}
      body3={body[2]}
      body4={body[3]}
      body5={body[4]}
      body6={body[5]}
      body7={body[6]}
      yields="8-10 servings"
      prep="10 minutes"
      time="10-12 minutes"
      item1name="Strawberry Donut"
      item1short="Donut"
      item1ingredients={ingredients.StrawberryDonut}
      item1instructions={instructions.StrawberryDonut}
      item2name="Donut Icing"
      item2short="Icing"
      item2ingredients={ingredients.DonutIcing}
      item2instructions={instructions.DonutIcing}
      notes={notes}
      closing={closing}
    />
  );
};

export const query = graphql`
  query RecipeImages {
    main: file(relativePath: { eq: "recipeImages/strwdonuts-card-image.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image1: file(relativePath: { eq: "recipeImages/strwdonuts-img1.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image2: file(relativePath: { eq: "recipeImages/strwdonuts-img2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
