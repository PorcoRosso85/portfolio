import Model from "./model";
import { relations } from "../services/store";

import { Todos } from "./Todos.model";

relations.setRelationshipDefinition(
  "projectTodos",
  "todos",
  "projects",
  "projectId"
);

const Projects = (() => {
  const baseProjects = Model("projects");

  const byId = (projectId) => {
    const project = baseProjects.byId(projectId);
    project.todos = relations
      .getLocalRowIds("projectTodos", projectId)
      .map(Todos.byId);

    return project;
  };

  return {
    ...baseProjects,
    byId,
  };
})();

export default Projects;
