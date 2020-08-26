class TodoAction {
  static GET_TODO = "GET_TODO";
  static GET_TODO_SUCCESSFULL = "GET_TODO_SUCCESFULL";
  static GET_TODO_FAILED = "GET_TODO_FAILED";

  static getTodo(data) {
    return {
      type: this.GET_TODO,
      data,
    };
  }

  static getTodoSuccesfull(data) {
    return {
      type: this.GET_TODO_SUCCESSFULL,
      data,
    };
  }

  static getTodoFailed(data) {
    return {
      type: this.GET_TODO_FAILED,
      data,
    };
  }
}

export default TodoAction;
