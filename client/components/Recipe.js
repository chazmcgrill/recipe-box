import React, { Component } from 'react';

class Recipe extends Component {
  render() {
    const {name, description, id} = this.props.recipe;
    const toppings = this.props.recipe.toppings.map((item, i) => (
      <li key={i}>{item}</li>
    ))
    return (
      <div className="list-item" >
        <h4>{name}</h4>
        <div>
          <p>{description}</p>
          <strong>Toppings</strong>
          <ul>
            {toppings}
          </ul>
          <button className="danger" onClick={() => this.props.onDelete(id)}>Delete</button>
          <button>Edit</button>
        </div>
      </div>
      
    )
  }
}

export default Recipe;
