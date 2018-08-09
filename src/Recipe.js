import React from 'react';

const Recipe = props => {

  const mapIngredients = () => {
    return props.recipe.ingredients.split(',').map((ingredient, index) => <li key={index}>{ingredient}</li>)
  }

  return (
    <div>
      <img src={props.recipe.thumbnail} alt=''></img>
      <a href={props.recipe.href}>{props.recipe.title}</a>
      <ul>
        {mapIngredients()}
      </ul>
      <br></br><br></br>
    </div>
  )
}

export default Recipe;
