import { Proj } from "./projects-model.js";
import { Project } from "./project.js";
import { Todos } from "./todos.js";
import { format } from "date-fns";

import { Storage } from "./storage";

export const initializeDefault = function () {
  localStorage.clear();
  const checkLocalStorage = localStorage.getItem("projectsArray");

  const { parser, stringer, setStorage } = Storage();
  console.log(checkLocalStorage);

  if (checkLocalStorage == null) {
    const task = new Todos(
      "Drive to Pet Smart",
      "Buy food for the cats",
      "2025-12-02",
      "priority-color-low",
      0,
      crypto.randomUUID()
    );

    const task2 = new Todos(
      "Finish Matrix HW",
      "Time to lock in",
      "2025-10-01",
      "priority-color-medium",
      0,
      crypto.randomUUID()
    );

    const task3 = new Todos(
      "Go to publix",
      "Buy the buffalo sauce chicken sub",
      format(new Date(), "yyyy-MM-dd"),
      "priority-color-high",
      0,
      crypto.randomUUID()
    );

    const task4 = new Todos(
      "Buy Tickets",
      "",
      "2025-10-04",
      "priority-color-high",
      0,
      crypto.randomUUID()
    );

    const task5 = new Todos(
      "Pack clothes in luggage",
      "",
      "2025-10-10",
      "priority-color-high",
      0,
      crypto.randomUUID()
    );

    const defaultProject = new Project(
      "Default Project 🏠",
      [],
      crypto.randomUUID()
    );
    const secondProject = new Project(
      "School trip 🌟",
      [],
      crypto.randomUUID()
    );
    Proj.addProject(defaultProject);
    Proj.addProject(secondProject);
    defaultProject.addTodo(task);
    defaultProject.addTodo(task2);
    defaultProject.addTodo(task3);
    secondProject.addTodo(task4);
    secondProject.addTodo(task5);

    console.log(defaultProject.getTodosArray);

    setStorage(Proj.getProjectsArray());

    console.log(Proj.getProjectsArray());
    return { defaultProject };
  } else {
    const projectsArrayFromLS = parser(checkLocalStorage);

    console.log(projectsArrayFromLS);
    Proj.setProjectsArray(projectsArrayFromLS);
    console.log(Proj.getProjectsArray());

    const defaultProject = Proj.getProjectsArray()[0];

    return { defaultProject };
  }
};
