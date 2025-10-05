import { Todos } from "./todos.js";
import { Proj } from "./projects-model.js";
import { projectUIHandler, dialogUIHandler } from "./ui-handlers.js";
import { Project } from "./project.js";

export const eventHandling = (function () {
  const { renderPage, updateProjectsUI, displayProjectFormSidebarItem } =
    projectUIHandler();

  //Event handling for adding tasks
  const addTaskButton = document.querySelector(".add-task");
  const addTaskDialog = document.querySelector(".add-task-dialog");
  const addTaskSubmit = document.querySelector(".submit-add-task");
  const addTaskCancel = document.querySelector(".cancel-add-task");

  // For dialog (Adding tasks)
  const addTaskPriority = document.getElementById("add-task-dialog-priority");
  const addTaskDescription = document.getElementById(
    "add-task-dialog-description"
  );
  const addTaskTitle = document.getElementById("add-task-dialog-title");
  const addTaskProjects = document.getElementById("add-task-dialog-projects");
  const addTaskDate = document.getElementById("add-task-dialog-date");
  const addTaskForm = document.querySelector(".add-task-dialog-content");
  //Event handling for Projects
  const addProjectButton = document.querySelector(".add-projects");
  addProjectButton.addEventListener("click", (e) => {
    const addProjectButtonSelector = document.querySelector(".project-form");

    //We check if it exists
    if (addProjectButtonSelector !== null) updateProjectsUI(Proj);

    //We create a sidebar form to create a project.
    const displayForm = displayProjectFormSidebarItem();

    console.log(displayForm);
  });

  addTaskButton.addEventListener("click", (e) => {
    addTaskDialog.showModal();
  });

  addTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const projectTo = Proj.findProjectById(addTaskProjects.value);
    const newTask = new Todos(
      addTaskTitle.value,
      addTaskDescription.value,
      addTaskDate.value,
      addTaskPriority.value,
      0
    );

    //Create task item and add it to the inputted project array.
    projectTo.addTodo(newTask);

    renderPage(projectTo);

    //Clear its contents
    addTaskDialog.close();

    addTaskTitle.value = "";
    addTaskDescription.value = "";
    addTaskDate.value = "";
    addTaskPriority.value = "none";
  });

  addTaskCancel.addEventListener("click", (e) => {
    e.preventDefault();
    addTaskDialog.close();
  });

  return {};
  //add task dialog handling
})();
