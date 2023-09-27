import Model from "./model";
import { store, indexes } from "../services/store";

indexes.setIndexDefinition("byPriority", "todos", "priority");

const Todos = () => {
  const baseTodos = Model("todos");

  const priorities = () => indexes.getSliceIds("byPriority");
  const idsByPriority = (priority) =>
    indexes.getSliceRowIds("byPriority", priority);
  const byPriority = (priority) => idsByPriority(priority).map(baseTodos.byId);

  return {
    ...baseTodos,
    priorities,
    byPriority,
  };
};

export default Todos;
