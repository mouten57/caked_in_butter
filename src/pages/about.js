import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PageTemplate from '../components/PageTemplate';

export default props => {
  console.log(props);
  return (
    <PageTemplate>
      <Img
        style={{ margin: '0 -43px' }}
        fluid={props.data.profile.childImageSharp.fluid}
      />
      <h1 className="page-title">About</h1>

      <p />

      <p>
        Hi friends! I’m Emily Outen, a Carolina girl living in Sugar Land, Texas
        with my husband Matt and our newest addition: our daughter, Monroe
        Grace. In addition to loving all things buttery and sweet, I enjoy hot
        coffee, cookware, cuddles with Monroe, and sushi dates with Matt.
      </p>
      <p>
        I was introduced to cooking at a young age when I would help my Mom in
        the kitchen while she cooked for our boisterous family of 7, but my love
        and passion for baking started fairly recently during my pregnancy with
        Monroe. Though I enjoyed cooking, I was always afraid of baking because
        of the precision it required. Now, it doesn’t scare me so much. I love
        seeing my bakes when they’re complete and even more than that I love
        sharing them with the people I love.
      </p>
      <p>
        Food has always meant ‘togetherness’ to me- so sharing my bakes with
        family and friends brings me such a great joy! My hope for this blog is
        that you are inspired to get your kitchen a little bit messy, get some
        flour in your hair and bring your loved ones together around something
        buttery and crumbly.
      </p>
      <p style={{ textAlign: 'center' }}>
        <em>Bon appetit!</em>
      </p>
    </PageTemplate>
  );
};

export const query = graphql`
  query {
    profile: file(relativePath: { eq: "profile-placeholder.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
