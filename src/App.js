import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import TodoAction from "./store/Actions/todoActions";

// function UpdateTodo() {
//   return {
//     type: "ADD TODO",
//   };
// }

class App extends Component {
  componentDidMount() {
    this.props.getTodo();
  }

  render() {
    return (
      <div className="App">
        <h1>hello world</h1>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    Todo: state.Todo.text,
  };
}
function mapDispatchtoProps(dispatch) {
  return {
    getTodo: (data) => dispatch(TodoAction.getTodo(data)),
  };
  // return { UpdateTodo: (data) => dispatch(UpdateTodo(data)) };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
