import React from 'react';
import Recipe from './Recipe.js'

const RecipeList = props => {

  const showRecipes = () => {
    return props.recipes.map((recipe, index) => <Recipe key={index} recipe={recipe}/>)
  }

  return (
    <div>
      {showRecipes()}
      <button onClick={props.moreButton}>Show Me More! I'm Still Hungry</button>
      <br></br><br></br>
    </div>
  )
}

export default RecipeList;
