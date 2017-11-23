import React, { Component } from 'react';

class Recipe extends Component {
  render() {
    return (
      <div className="list-item" >
        <h4>{this.props.recipe.name}</h4>
        <div>
          <p>{this.props.recipe.description}</p>
          <strong>Toppings</strong>
          <ul>
            {this.props.recipe.toppings.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <button className="danger">Delete</button>
          <button>Edit</button>
        </div>
      </div>
    )
  }
}

export default Recipe;
