import TodoActions from "../Actions//todoActions";
function Todo(state = { name: "muneeb" }, action) {
  switch (action.type) {
    case TodoActions.GET_TODO:
      return {
        ...state,
        text: "TODO  ",
      };
    case "DELETE TODO":
      return {
        ...state,
        text: "TODO ADDED",
      };

    default:
      return state;
      break;
  }
}

export default Todo;
