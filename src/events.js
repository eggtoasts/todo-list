import { Todos } from "./todos.js";
import { Proj } from "./projects-model.js";
import { projectUIHandler } from "./ui-handlers.js";

export const eventHandling = (function () {
  const { renderPage, displayProjectFormSidebarItem } = projectUIHandler();
  //Event handling for adding tasks
  const addTaskButton = document.querySelector(".add-task");
  const addTaskDialog = document.querySelector(".add-task-dialog");
  const addTaskSubmit = document.querySelector(".submit-add-task");
  const addTaskCancel = document.querySelector(".cancel-add-task");

  const addTaskPriority = document.getElementById("add-task-dialog-priority");
  const addTaskDescription = document.getElementById(
    "add-task-dialog-description"
  );
  const addTaskTitle = document.getElementById("add-task-dialog-title");
  const addTaskProjects = document.getElementById("add-task-dialog-projects");
  const addTaskDate = document.getElementById("add-task-dialog-date");

  //Event handling for Projects
  const addProjectButton = document.querySelector(".add-projects");
  addProjectButton.addEventListener("click", (e) => {
    const addProjectButtonSelector = document.querySelector(".project-form");
    if (addProjectButtonSelector == null) {
      //We create a sidebar form to create a project.
      const displayForm = displayProjectFormSidebarItem();

      console.log(displayForm);

      //Deletion event
      displayForm.addEventListener("click", (e) => {
        //If the user clicks on the x, the form gets deleted
        if (e.target.className === "icon project-cancel") displayForm.remove();
      });

      //Adding a new project page & adding it to our array
    }
  });

  addTaskButton.addEventListener("click", (e) => {
    addTaskDialog.showModal();
  });

  addTaskSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    const projectTo = Proj.findProjectById(addTaskProjects.value);
    const newTask = new Todos(
      addTaskTitle.value,
      addTaskDescription.value,
      addTaskDate.value,
      addTaskPriority.value,
      0
    );

    projectTo.addTodo(newTask);

    renderPage(projectTo);

    //Create task item and add it to the inputted project array.
  });

  addTaskCancel.addEventListener("click", (e) => {
    e.preventDefault();
    addTaskDialog.close();
  });

  return {};
  //add task dialog handling
})();
