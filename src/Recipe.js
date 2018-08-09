import React from 'react';
import Ingredient from './Ingredient';


const Recipe = props => {

  const mapIngredients = () => {
    return props.recipe.ingredients.split(',').map((ingredient, index) => <li><Ingredient key={index} ingredient={ingredient}/></li>)
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
