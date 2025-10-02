import { Todos } from "./todos.js";
import { Proj } from "./projects-model.js";
import { pageUIHandler } from "./ui-handlers.js";

export const eventHandling = (function () {
  let pageUI = pageUIHandler();
  //inputs
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
    console.log(projectTo);

    pageUI.renderPage(projectTo);

    //Create task item and add it to the inputted project array.
  });

  addTaskCancel.addEventListener("click", (e) => {
    e.preventDefault();
    addTaskDialog.close();
  });

  return {};
  //add task dialog handling
})();
