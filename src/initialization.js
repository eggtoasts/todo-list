import { Proj } from "./projects-model.js";
import { Project } from "./project.js";
import { Todos } from "./todos.js";

export const initializeDefault = function () {
  const task = new Todos(
    "Play Persona 5 Royal",
    "olorum soluta pariatur itaque eligendi nobis praesentium iure tempore. Voluptatem!",
    "2025-10-01",
    "priority-color-low",
    0
  );

  const task2 = new Todos(
    "This should be second.",
    "olorum soluta pariatur itaque eligendi nobis praesentium iure tempore. Voluptatem!",
    "2025-12-02",
    "priority-color-medium",
    0
  );

  const task3 = new Todos(
    "This should be first.",
    "olorum soluta pariatur itaque eligendi nobis praesentium iure tempore. Voluptatem!",
    "2025-05-12",
    "priority-color-high",
    0
  );

  const defaultProject = new Project("Default Project 🏠", "Blue", [], 1);
  const secondProject = new Project("Second Project 🌟", "Blue", [], 2);
  Proj.addProject(defaultProject);
  Proj.addProject(secondProject);
  defaultProject.addTodo(task);
  defaultProject.addTodo(task2);
  defaultProject.addTodo(task3);
  secondProject.addTodo(task3);

  console.log(defaultProject.getTodosArray);

  console.log(Proj.getProjectsArray());

  return { defaultProject };
};
