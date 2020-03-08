import checker from "./checker";
import logger from "./logger";
import newGoalAdded from "./addNewGoal";
import newTodoAdded from "./addNewTodo";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

export default applyMiddleware(
  thunk,
  checker,
  logger,
  newGoalAdded,
  newTodoAdded
);
