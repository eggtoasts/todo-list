import { Todos } from "./todos.js";
import { Proj, Projects } from "./projects-model.js";
import { projectUIHandler, dialogUIHandler } from "./ui-handlers.js";
import { Project } from "./project.js";
import { Storage } from "./storage";

const { parser, stringer, setStorage } = Storage();

export const eventHandling = (function () {
  const {
    renderAllTaskPage,
    renderTodayTasks,
    renderOverdueTasks,
    renderPage,
    updateProjectsUI,
    displayProjectFormSidebarItem,
  } = projectUIHandler();

  //For different pages
  const todayPage = document.querySelector(".today-page");
  const allTaskPage = document.querySelector(".all-tasks-page");
  const overduePage = document.querySelector(".overdue-page");

  todayPage.addEventListener("click", (e) => {
    renderTodayTasks(Proj);
  });
  allTaskPage.addEventListener("click", (e) => {
    renderAllTaskPage(Proj);
  });
  overduePage.addEventListener("click", (e) => {
    renderOverdueTasks(Proj);
  });

  //Event handling for toggling sidebar & handling smaller screens
  const toggleSidebarButton = document.querySelector(".toggle-sidebar");
  const mainContainer = document.querySelector(".main-container");
  const sidebar = document.querySelector(".sidebar");
  const mainContent = document.querySelector(".main-content");
  const toggleSidebarButtonHeader = document.querySelector(
    ".header-toggle-sidebar"
  );

  toggleSidebarButton.addEventListener("click", (e) => {
    const width = window.innerWidth > 0 ? window.innerWidth : screen.width;

    if (width < 600) {
      mainContainer.removeAttribute("id");
      sidebar.removeAttribute("id");
      mainContent.removeAttribute("id");
      return;
    }

    mainContainer.setAttribute("id", "one");
    sidebar.setAttribute("id", "hidden");
    toggleSidebarButtonHeader.setAttribute("id", "showK");
  });

  toggleSidebarButtonHeader.addEventListener("click", (e) => {
    const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    if (width < 600) {
      mainContainer.setAttribute("id", "main-container-toggle");
      sidebar.setAttribute("id", "sidebar-toggle");

      if (sidebar.id === "showK")
        mainContent.setAttribute("id", "main-content-toggle");
      toggleSidebarButtonHeader.setAttribute("id", "show");
      return;
    }
    mainContainer.removeAttribute("id");
    sidebar.removeAttribute("id");
    toggleSidebarButtonHeader.setAttribute("id", "show");
  });

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
      0,
      crypto.randomUUID()
    );

    //Create task item and add it to the inputted project array.
    projectTo.addTodo(newTask);

    setStorage(Proj.getProjectsArray());

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
