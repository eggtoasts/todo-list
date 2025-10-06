import { Proj } from "./projects-model.js";
import { Project } from "./project.js";
import { Todos } from "./todos.js";
import { format } from "date-fns";

import { Storage } from "./storage";

export const initializeDefault = function () {
  //Uncomment for checks
  localStorage.clear();

  const checkLocalStorage = localStorage.getItem("projectsArray");

  const { parser, setStorage } = Storage();
  console.log(checkLocalStorage);

  if (checkLocalStorage == null) {
    const date1 = new Date();
    date1.setDate(date1.getDate() + 1);

    const task = new Todos(
      "Drive to Pet Smart",
      "Buy food for the cats",
      format(date1, "yyyy-MM-dd"),
      "priority-color-high",
      0,
      crypto.randomUUID()
    );

    const task2 = new Todos(
      "Finish Matrix and Linear Eq. HW",
      "Finish topics:\n\n- Chapter 10\n- Chapter 21\n- Chapter 27",
      "2025-10-01",
      "priority-color-medium",
      0,
      crypto.randomUUID()
    );

    const task3 = new Todos(
      "Buy groceries at Publix",
      "",
      format(new Date(), "yyyy-MM-dd"),
      "priority-color-low",
      0,
      crypto.randomUUID()
    );

    const date4 = new Date();
    date4.setDate(date4.getDate() - 1);

    const task4 = new Todos(
      "Buy Tickets",
      "",
      format(date4, "yyyy-MM-dd"),
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

    //Gets the first project or displays the "today" page.
    const defaultProject = Proj.getProjectsArray()[0] || "delete";

    return { defaultProject };
  }
};
