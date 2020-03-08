import checker from "./checker";
import logger from "./logger";
import addNewGoal from "./addNewGoal";
import addNewTodo from "./addNewTodo";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

export default applyMiddleware(
  thunk,
  checker,
  logger,
  newGoalAdded,
  newTodoAdded
);
