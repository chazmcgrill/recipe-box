// class AddRecipe extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       description: "",
//       toppings: ""
//     }
//   }
//
//   toppingsArray(str) {
//     return str.replace(/ /g, '').split(',');
//   }
//
//   handleChange(event) {
//     this.setState({[event.target.name]: event.target.value})
//   }
//
//   uniqueId() {
//     counter += 1;
//     return counter;
//   }
//
//   handleFormSubmit(event) {
//     event.preventDefault();
//     const pizzaObj = {
//       id: this.uniqueId(),
//       name: this.state.name,
//       description: this.state.description,
//       toppings: this.toppingsArray(this.state.toppings)
//     };
//     this.props.newPizza(pizzaObj);
//   }
//
//   render() {
//     return (
//       <div className="modal-bg">
//         <div className="modal-box">
//           <button onClick={this.props.closeAddModal} className="btn-close">X</button>
//           <form onSubmit={this.handleFormSubmit.bind(this)}>
//             <label>Name</label>
//             <input name="name" type="text" placeholder="pizza name"
//               onChange={this.handleChange.bind(this)}
//             />
//             <label>Description</label>
//             <input name="description" type="text" placeholder="description"
//               onChange={this.handleChange.bind(this)}
//             />
//             <label>Toppings</label>
//             <textarea name="toppings" placeholder="separate by commas"
//               onChange={this.handleChange.bind(this)}
//             />
//             <input type="submit" value="Add Recipe"></input>
//           </form>
//         </div>
//       </div>
//     )
//   }
// }
