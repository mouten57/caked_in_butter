import React from 'react';
import PropTypes from 'prop-types';
import './page-template.css';
import { StaticQuery, graphql } from 'gatsby';
import contactUsStyle from '../../content/assets/jss/views/contactUsStyle.jsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import withStyles from '@material-ui/core/styles/withStyles';
import Header from './header';
import Head from './head';
import Footer from '../components/Footer/Footer';

const PageTemplate = props => {
  const { classes } = props;
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              menuLinks {
                name
                link
              }
            }
          }
        }
      `}
      render={data => (
        <React.Fragment>
          <Head />
          <Header
            menuLinks={data.site.siteMetadata.menuLinks}
            siteTitle={data.site.siteMetadata.title}
            headerImg={props.headerImg}
          />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
              backgroundColor: '#f9f3f2'
            }}
          >
            <main className="content">
              <article className="page">
                <div className="entry-content">{props.children}</div>
              </article>
            </main>
          </div>
          <Footer
            theme="white"
            content={
              <div>
                <div className={classes.left}>
                  <List className={classes.list}>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="https://www.twitter.com/cakedinbutter"
                        className={(classes.icon, classes.block)}
                      >
                        <i className="fab fa-2x fa-twitter" />
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="https://www.instagram.com/cakedinbutter"
                        className={(classes.icon, classes.block)}
                      >
                        <i className="fab fa-2x fa-instagram" />
                      </a>
                    </ListItem>
                    {/* <ListItem className={classes.inlineBlock}>
                      <a
                        href="//blog.creative-tim.com/"
                        className={classes.block}
                      >
                        Blog
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="https://www.creative-tim.com/license"
                        className={classes.block}
                      >
                        Licenses
                      </a>
                    </ListItem> */}
                  </List>
                </div>
                <div className={classes.right}>
                  &copy; {1900 + new Date().getYear()} by{' '}
                  <a href="https://www.creative-tim.com">Matt Outen</a>
                </div>
              </div>
            }
          />
        </React.Fragment>
      )}
    />
  );
};

PageTemplate.propTypes = {
  headerImg: PropTypes.bool
};
PageTemplate.defaultProps = {
  headerImg: true
};

export default withStyles(contactUsStyle)(PageTemplate);
