import React, { Component } from 'react';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false
    };
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handleTitleClick() {
    const showInfo = !this.state.showInfo;
    this.setState({showInfo})
  }

  render() {
    const {name, description, id} = this.props.recipe;
    const {showInfo} = this.state;
    const toppings = this.props.recipe.toppings.map((item, i) => (
      <li key={i}>{item}</li>
    ));

    return (
      <div className="list-item" >
        <h4 onClick={this.handleTitleClick}>{name}</h4>
        {showInfo ? <div>
          <p>{description}</p>
          <strong>Toppings</strong>
          <ul>
            {toppings}
          </ul>
          <button className="danger" onClick={() => this.props.onDelete(id)}>Delete</button>
          <button onClick={() => this.props.onEdit(id)}>Edit</button>
        </div> : null}
      </div>

    )
  }
}

export default Recipe;
