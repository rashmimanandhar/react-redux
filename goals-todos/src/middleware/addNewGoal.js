import ADD_GOAL from "../actions/goals";

const newGoalAdded = store => next => action => {
  next(action);
  if (action.type === ADD_GOAL) alert("That's a great goal");
};

export default newGoalAdded;
