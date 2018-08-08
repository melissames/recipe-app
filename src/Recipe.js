import React, { Component } from 'react';
import Ingredient from './Ingredient';


class Recipe extends Component {

  mapIngredients = () => {
    return this.props.recipe.ingredients.split(',').map((ingredient, index) => <li><Ingredient key={index} ingredient={ingredient}/></li>)
  }

  render() {
    let recipe = this.props.recipe
    return (
      <div>
        <img src={recipe.thumbnail} alt=''></img>
        <a href={recipe.href}>{recipe.title}</a>
        <ul>
          {this.mapIngredients()}
        </ul>
        <br></br><br></br>
      </div>
    )
  }
}

export default Recipe;
