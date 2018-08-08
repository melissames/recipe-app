import React, { Component } from 'react';

class Ingredient extends Component {

  render() {

    return (
      <div>
        {this.props.ingredient}
      </div>
    )
  }
}

export default Ingredient;
