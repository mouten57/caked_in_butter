import React from 'react';
import PageTemplate from '../PageTemplate';
import './recipeLayout.css';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import EntryHeader from './entryHeader';

const RecipeLayout = props => {
  const imageStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '136%',
    margin: '0 0 20px',
    right: '22%',
    position: 'relative'
  };

  return (
    <PageTemplate>
      <div className="entry-main">
        <EntryHeader
          className="entry-header"
          category={props.category}
          title={props.title}
        />
        <div style={imageStyle}>
          <Img style={{ display: 'inherit' }} fixed={props.mainImage} />
        </div>

        <p className="entry-body">{props.body1}</p>

        <div style={imageStyle}>
          <Img style={{ display: 'inherit' }} fixed={props.image1} />
        </div>

        <p className="entry-body">{props.body2}</p>
        <p className="entry-body">{props.body3}</p>

        <div style={imageStyle}>
          <Img style={{ display: 'inherit' }} fixed={props.image2} />
        </div>
        <p className="entry-body">{props.body4}</p>
        <p className="entry-body">{props.body5}</p>
        <p className="entry-body">{props.body6}</p>
        <p className="entry-body">{props.body7}</p>

        <div className="recipe-box">
          <div className="recipe-header">
            <div className="recipe-title">
              <h1 className="recipe-name">{props.title}</h1>
              <h4 className="recipe-yield">
                Yields {props.yields}
                <br />
                Prep Time: {props.prep}
                <br />
                Cook Time: {props.time}
              </h4>
            </div>
          </div>
          <div className="recipe-detail">
            <div className="recipe-ingredients">
              <h4>Ingredients</h4>
              <p>
                <em>{props.item1name}:</em>
              </p>
              <ul>
                {props.item1ingredients.map((ingredient, idx) => {
                  return <li key={idx}>{ingredient}</li>;
                })}
              </ul>

              <p>
                <em>{props.item2name}:</em>
              </p>
              <ul>
                {props.item2ingredients.map((ingredient, idx) => {
                  return <li key={idx}>{ingredient}</li>;
                })}
              </ul>
            </div>
            <div className="recipe-instructions">
              <h4>Instructions</h4>
              <p>
                <em>{props.item1short}:</em>
              </p>
              <ol>
                {props.item1instructions.map((instruction, idx) => {
                  return <li key={idx}>{instruction}</li>;
                })}
              </ol>

              <p>
                <em>{props.item2short}:</em>
              </p>
              <ol>
                {props.item2instructions.map((instruction, idx) => {
                  return <li key={idx}>{instruction}</li>;
                })}
              </ol>
            </div>
            <div className="recipe-notes">
              <h4>Notes</h4>
              <p>{props.notes}</p>
              <p>{props.closing}</p>
              <p style={{ textAlign: 'center' }}>
                <em>Bon appetit! </em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default RecipeLayout;
