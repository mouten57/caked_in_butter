const findImage = (data, filename) => {
  let ret = data.allFile.edges.filter(
    node => node.node.childImageSharp.fixed.originalName === filename
  );

  return ret[0].node.childImageSharp.fixed;
};

export default findImage;
