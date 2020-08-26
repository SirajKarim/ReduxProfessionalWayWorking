function User(state = { name: "muneeb" }, action) {
  switch (action.type) {
    case "ADD USER":
      return {
        ...state,
        text: "USER ADDED",
      };
    case "DELETE USER":
      return {
        ...state,
        text: "USER ADDED",
      };

    default:
      return state;
      break;
  }
}
export default User;
