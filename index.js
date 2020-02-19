//Library
function createStore(reducer) {
  let state;
  let listeners = [];
  const getState = () => {
    return state;
  };

  const subscribe = listener => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  return {
    getState,
    subscribe,
    dispatch
  };
}

//App code
function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.todo]);
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.id);
    case "TOGGLE_TODO":
      return state.map(todo => {
        todo.complete = todo.id === action.id ? !todo.complete : todo.complete;
        return todo;
      });
    default:
      return state;
  }
}

const store = createStore(todos);
store.subscribe(() => {
  console.log("new state", store.getState());
});

store.dispatch({
  type: "ADD_TODO",
  todo: {
    id: 0,
    name: "bring book",
    complete: false
  }
});

store.dispatch({
  type: "ADD_TODO",
  todo: {
    id: 1,
    name: "read book",
    complete: false
  }
});

store.dispatch({
  type: "ADD_TODO",
  todo: {
    id: 2,
    name: "send book",
    complete: true
  }
});

store.dispatch({
  type: "REMOVE_TODO",
  id: 2
});

store.dispatch({
  type: "TOGGLE_TODO",
  id: 1
});
