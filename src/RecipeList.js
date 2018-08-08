import React, { Component } from 'react';
import Recipe from './Recipe.js'

class RecipeList extends Component {

  showRecipes = () => {
    return this.props.recipes.map((recipe, index) => <Recipe key={index} recipe={recipe}/>)
  }

  render() {
    return (
      <div>
        {this.showRecipes()}
        <button onClick={this.props.moreButton}>Show Me More! I'm Still Hungry</button>
        <br></br><br></br>
      </div>
    )
  }
}

export default RecipeList;
