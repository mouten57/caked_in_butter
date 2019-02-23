// import React from 'react';
// import { StaticQuery, graphql } from 'gatsby';
// import Header from './header';
// import Head from './head';

// const Layout = props => {
//   console.log(props);
//   return (
//     <StaticQuery
//       query={graphql`
//         query SiteTitleQueryold {
//           site {
//             siteMetadata {
//               title
//               menuLinks {
//                 name
//                 link
//               }
//             }
//           }
//         }
//       `}
//       render={data => (
//         <React.Fragment>
//           <Head />
//           <Header
//             menuLinks={data.site.siteMetadata.menuLinks}
//             siteTitle={data.site.siteMetadata.title}
//             displayImg={props.displayImg}
//           />
//           <div
//             style={{
//               margin: '0 auto',
//               maxWidth: 960,
//               padding: '0px 1.0875rem 1.45rem',
//               paddingTop: 0,
//               backgroundColor: '#f9f3f2'
//             }}
//           >
//             {props.children}
//           </div>
//         </React.Fragment>
//       )}
//     />
//   );
// };

// export default Layout;
