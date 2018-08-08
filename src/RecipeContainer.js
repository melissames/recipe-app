import React, { Component } from 'react';
import RecipeList from './RecipeList.js'

const URL = 'http://www.recipepuppy.com/api/'

class RecipeContainer extends Component {

  state = {
    query: '',
    searched: '',
    recipeData: null,
    page: 1
  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    this.state.query.includes(',') ? this.fetchRecipes('i') : this.fetchRecipes('q');
  }

  fetchRecipes = urlParameter => {
    let currentSearch = URL + '?' + urlParameter + '=' + this.state.query
    fetch(currentSearch)
      .then(res => res.json())
      .then(json => this.setState({
        searched: currentSearch,
        recipeData: json.results
      }))
  }

  showNextPageOfRecipes = () => {
    this.setState({
      page: this.state.page++
    })
    this.fetchMoreRecipes()
  }

  fetchMoreRecipes = () => {
    fetch(this.state.searched + '&p=' + this.state.page)
      .then(res => res.json())
      .then(json => this.addRecipesToState(json.results))
  }

  addRecipesToState = (data) => {
    return data.map (recipe => this.setState({ recipeData: [...this.state.recipeData, recipe] }))
  }

  render() {
    return (
      <div>
        <h4>Search Recipes by name or Ingredients seperated by a comma</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='search recipes...'
            onChange={this.handleChange}
          />
        </form>
        <br></br><br></br>
        {this.state.recipeData ? <RecipeList recipes={this.state.recipeData} moreButton={this.showNextPageOfRecipes}/> : null}
      </div>
    )
  }
}

export default RecipeContainer;
