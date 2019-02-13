import React from 'react';
import PageTemplate from '../PageTemplate';
import './recipeLayout.css';
import EntryHeader from './entryHeader';

const RecipeLayout = props => {
  return (
    <PageTemplate>
      <div className="entry-main">
        <EntryHeader
          className="entry-header"
          category={props.category}
          title={props.title}
        />
        {/* props.children is body and images */}
        {props.children}

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
                <em>{props.item1name}</em>
              </p>
              <ul>
                {props.item1ingredients.map((ingredient, idx) => {
                  return <li key={idx}>{ingredient}</li>;
                })}
              </ul>

              <p>
                <em>{props.item2name ? props.item2name : ''}</em>
              </p>
              <ul>
                {props.item2ingredients
                  ? props.item2ingredients.map((ingredient, idx) => {
                      return <li key={idx}>{ingredient}</li>;
                    })
                  : null}
              </ul>
            </div>
            <div className="recipe-instructions">
              <h4>Instructions</h4>
              <p>
                <em>{props.first_note}</em>
              </p>
              <p>
                <em>{props.item1short}</em>
              </p>
              <ol>
                {props.item1instructions.map((instruction, idx) => {
                  return <li key={idx}>{instruction}</li>;
                })}
              </ol>

              <p>
                <em>{props.item2short}</em>
              </p>
              <ol>
                {props.item2instructions
                  ? props.item2instructions.map((instruction, idx) => {
                      return <li key={idx}>{instruction}</li>;
                    })
                  : null}
              </ol>
              <p>
                <em>{props.between_2_and_3_note}</em>
              </p>
              <p>
                <em>{props.item3short}</em>
              </p>
              <ol>
                {props.item3instructions
                  ? props.item3instructions.map((instruction, idx) => {
                      return <li key={idx}>{instruction}</li>;
                    })
                  : null}
              </ol>
              <p>
                <em>{props.assemble ? 'Assemble: ' : null}</em>
              </p>
              <ol>
                {props.assemble
                  ? props.assemble.map((instruction, idx) => {
                      return <li key={idx}>{instruction}</li>;
                    })
                  : null}
              </ol>
            </div>

            <div className="recipe-notes">
              <h4>{props.notes.length > 0 ? 'Notes' : ''}</h4>
              <ul>
                {props.notes.map((note, idx) => {
                  return <li key={idx}>{note}</li>;
                })}
              </ul>
            </div>
            <div className="recipe-closing">
              <h4>{props.closing ? 'In closing...' : ''}</h4>
              <p>{props.closing}</p>
            </div>
            <p style={{ textAlign: 'center' }}>
              <em>Bon appetit! </em>
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default RecipeLayout;
export const imageStyle = {
  display: 'grid',
  justifyContent: 'center',
  width: '100%',
  margin: '0 0 20px'
};
