import ADD_TODO from "../actions/todos";

const newTodoAdded = store => next => action => {
  next(action);
  if (action.type === ADD_TODO) alert("Don't forget to " + action.todo.name);
};

export default newTodoAdded;
