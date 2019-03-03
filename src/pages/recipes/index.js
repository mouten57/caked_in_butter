import React from 'react';
import PageTemplate from '../../components/PageTemplate';
import findImage from '../../utils/findImage';
import { StaticQuery, graphql } from 'gatsby';
import RecipeCard from '../../components/recipes/RecipeCard';
import index from '../../components/recipes/recipeIndex';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});
//map cards for recipes
const Index = props => {
  const { classes } = props;
  return (
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
          <div className={classes.root}>
            <Grid container spacing={24}>
              {/* Baked Strawberry Donuts */}
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <RecipeCard
                    slug="/recipes/strawberry-donuts"
                    fixed={findImage(data, 'strwdonuts-card-image.jpg')}
                    category={index.BakedStrawberryDonuts.category}
                    title={index.BakedStrawberryDonuts.title}
                  />
                </Paper>
              </Grid>
              {/* Biscotti */}
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <RecipeCard
                    slug="/recipes/biscotti"
                    fixed={findImage(data, 'biscotti-card-image-2.jpg')}
                    category={index.Biscotti.category}
                    title={index.Biscotti.title}
                  />
                </Paper>
              </Grid>
              {/* Dolly Drops */}
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <RecipeCard
                    slug="/recipes/dolly-drops"
                    fixed={findImage(data, 'dolly-card-image.jpg')}
                    category={index.DollyDrops.category}
                    title={index.DollyDrops.title}
                  />
                </Paper>
              </Grid>
              {/* Turtle Brownies */}
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <RecipeCard
                    slug="/recipes/turtle-brownies"
                    fixed={findImage(data, 'turtleBrownies-card-image.jpg')}
                    category={index.TurtleBrownies.category}
                    title={index.TurtleBrownies.title}
                  />
                </Paper>
              </Grid>
              {/* Red Velvet Cake Bites */}
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <RecipeCard
                    slug="/recipes/red-velvet-cake-bites"
                    fixed={findImage(data, 'cakeBites-card-image.jpg')}
                    category={index.RedVelvetCakeBites.category}
                    title={index.RedVelvetCakeBites.title}
                  />
                </Paper>
              </Grid>
              {/* Chocolate Chip Blondies */}
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <RecipeCard
                    slug="/recipes/chocolate-chip-blondies"
                    fixed={findImage(data, 'blondies-card-image.jpg')}
                    category={index.Blondies.category}
                    title={index.Blondies.title}
                  />
                </Paper>
              </Grid>
              {/* Flourless Chocolate Chip Cookies */}
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <RecipeCard
                    slug="/recipes/flourless-chocolate-chip-cookies"
                    fixed={findImage(data, 'flourlessCC-card-image.jpg')}
                    category={index.FlourlessChocolateChipCookies.category}
                    title={index.FlourlessChocolateChipCookies.title}
                  />
                </Paper>
              </Grid>
            </Grid>
          </div>
        </PageTemplate>
      )}
    />
  );
};

export default withStyles(styles)(Index);
