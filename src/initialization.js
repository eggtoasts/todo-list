import { Proj } from "./projects-model.js";
import { Project } from "./project.js";
import { Todos } from "./todos.js";
import { format } from "date-fns";

export const initializeDefault = function () {
  const task = new Todos(
    "Drive to Pet Smart",
    "Buy food for the cats",
    "2025-12-02",
    "priority-color-low",
    0
  );

  const task2 = new Todos(
    "Finish Matrix HW",
    "Time to lock in",
    "2025-10-01",
    "priority-color-medium",
    0
  );

  const task3 = new Todos(
    "Go to publix",
    "Buy the buffalo sauce chicken sub",
    format(new Date(), "yyyy-MM-dd"),
    "priority-color-high",
    0
  );

  const task4 = new Todos(
    "Buy Tickets",
    "",
    "2025-10-04",
    "priority-color-high",
    0
  );

  const task5 = new Todos(
    "Pack clothes in luggage",
    "",
    "2025-10-10",
    "priority-color-high",
    0
  );

  const defaultProject = new Project("Default Project 🏠", "Blue", [], 1);
  const secondProject = new Project("School trip 🌟", "Blue", [], 2);
  Proj.addProject(defaultProject);
  Proj.addProject(secondProject);
  defaultProject.addTodo(task);
  defaultProject.addTodo(task2);
  defaultProject.addTodo(task3);
  secondProject.addTodo(task4);
  secondProject.addTodo(task5);

  console.log(defaultProject.getTodosArray);

  console.log(Proj.getProjectsArray());

  return { defaultProject };
};
