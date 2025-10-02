import { Proj } from "./projects-model.js";

//DOM stuff
export let pageUIHandler = function () {
  const projectTitle = document.querySelector(".project-title");
  const taskUI = taskUIHandler();

  function renderPage(currentProject) {
    taskUI.updateTasksUI(currentProject);

    projectTitle.textContent = currentProject.getName;
    console.log(currentProject);
  }

  return { renderPage };
};

export const projectUIHandler = function () {
  let pageUI = pageUIHandler();
  const projectContainer = document.querySelector(".projects-container");

  function clearProjectUI(projectContainer) {
    let projectChild = projectContainer.lastElementChild;

    while (projectChild != null) {
      projectContainer.removeChild(projectChild);
      projectChild = projectContainer.lastElementChild;
    }
  }

  const addProjectEvent = function (projectItem) {
    projectItem.addEventListener("click", (e) => {
      //when we click on a project tab,
      //we render its page.

      const projectId = projectItem["id"];
      const currentProject = Proj.findProjectById(projectId);

      pageUI.renderPage(currentProject);
    });
  };

  let addProjectItem = function (currProject) {
    projectContainer.appendChild(currProject);
  };

  let createProjectItem = function (project) {
    //project has name, color, id
    const name = project.getName;
    const color = project.getTitle;
    const id = project.getId;

    const projectItem = document.createElement("button");
    const tag = document.createElement("span");
    const projectTitle = document.createElement("div");
    const editOption = document.createElement("div");

    projectItem.setAttribute("class", "project-item");
    tag.setAttribute("class", "icon");
    projectTitle.setAttribute("class", "title");
    editOption.setAttribute("class", "right-option");
    projectItem.setAttribute("id", id);

    tag.textContent = "tag";
    projectTitle.textContent = name;

    projectContainer.appendChild(projectItem);
    projectItem.appendChild(tag);
    projectItem.appendChild(projectTitle);
    projectItem.appendChild(editOption);

    //Add event
    addProjectEvent(projectItem);

    return projectItem;
  };

  let updateProjectsUI = function (projects) {
    clearProjectUI(projectContainer);

    //We go through every project in the Projects array.
    const projectsArray = projects.getProjectsArray();
    projectsArray.forEach((projectItem) => {
      console.log("Created a Project item ");

      //Creates project item element
      const currProject = createProjectItem(projectItem);

      //Add project item into our DOM
      addProjectItem(currProject);
    });
  };

  //Destructures renderPage from pageUI
  const { renderPage } = pageUI;

  return { updateProjectsUI, renderPage };
};

export const taskUIHandler = function () {
  const taskContainer = document.querySelector(".task-container");

  function clearTaskUI() {
    let taskChild = taskContainer.lastElementChild;

    while (taskChild != null) {
      taskContainer.removeChild(taskChild);
      taskChild = taskContainer.lastElementChild;
    }
  }

  function createTask(project) {
    const title = project.title;
    const description = project.description;
    const dueDate = project.dueDate;
    const priority = project.priority;
    const checked = project.checked;

    const taskItem = document.createElement("div");
    const taskTexts = document.createElement("div");
    const checkmark = document.createElement("button");
    const taskHeader = document.createElement("div");
    const taskTitle = document.createElement("div");

    const taskEdit = document.createElement("button");
    const editIcon = document.createElement("span");

    const taskDescription = document.createElement("div");

    const taskDate = document.createElement("div");
    const calendarIcon = document.createElement("div");
    const dateText = document.createElement("div");

    //priority
    console.log(priority);

    //Assign all classes

    taskItem.setAttribute("class", "task-item");
    taskTexts.setAttribute("class", "task-texts");
    checkmark.setAttribute("class", `checkmark ${priority}`);
    taskHeader.setAttribute("class", "task-header");
    taskTitle.setAttribute("class", "task-title");
    taskEdit.setAttribute("class", "task-edit");
    editIcon.setAttribute("class", "icon");
    taskDescription.setAttribute("class", "task-description");
    taskDate.setAttribute("class", "task-date");
    calendarIcon.setAttribute("class", "icon");
    dateText.setAttribute("class", "task-date-text");

    //Set all text to is corresponding elements

    taskTitle.textContent = title;
    editIcon.textContent = "edit_note";
    taskDescription.textContent = description;
    calendarIcon.textContent = "date_range";
    dateText.textContent = dueDate;

    //Append it to its respective div parents
    taskContainer.appendChild(taskItem);

    taskItem.appendChild(checkmark);

    const taskTextsSelector = taskItem.appendChild(taskTexts);

    const taskHeaderSelector = taskTextsSelector.appendChild(taskHeader);

    taskHeaderSelector.appendChild(taskTitle);
    const taskEditSelector = taskHeaderSelector.appendChild(taskEdit);

    taskEditSelector.appendChild(editIcon);

    taskTextsSelector.appendChild(taskDescription);

    const taskContainerSelector = taskTextsSelector.appendChild(taskDate);

    taskContainerSelector.appendChild(calendarIcon);
    taskContainerSelector.appendChild(dateText);
  }

  function createAllTasks(project) {
    console.log(project);
    const todosArray = project.getTodosArray;

    todosArray.forEach((todo) => {
      createTask(todo);
    });
  }

  function updateTasksUI(project) {
    clearTaskUI();
    createAllTasks(project);
  }

  return { updateTasksUI };
};

export const dialogUIHandler = function () {
  let pageUI = pageUIHandler();
  //Selecting project container
  const projectDropdown = document.getElementById("add-task-dialog-projects");

  function clearUI(container) {
    let taskChild = container.lastElementChild;

    while (taskChild != null) {
      container.removeChild(taskChild);
      taskChild = container.lastElementChild;
    }
  }

  function createProjectOption(project) {
    const projectOption = document.createElement("option");
    projectOption.setAttribute("value", project.getId);

    return projectOption;
  }

  function createAllDialogs(allProjects) {
    console.log(allProjects.getProjectsArray());
    allProjects.getProjectsArray().forEach((proj) => {
      const projectOption = createProjectOption(proj);
      projectOption.textContent = proj.getName;
      projectDropdown.appendChild(projectOption);
    });
  }

  function updateDialogUI(allProjects) {
    clearUI(projectDropdown);
    createAllDialogs(allProjects);
  }

  return { updateDialogUI };
};

export const UserInterface = function (currentSelectedProject) {
  //Selecting project container
  const projectUI = projectUIHandler();
  const dialogUI = dialogUIHandler();
  const { renderPage } = projectUI;

  //Updates UI of Project & Tasks
  const updateProjectUI = () => projectUI.updateProjectsUI(Proj);

  projectUI.renderPage(currentSelectedProject);
  dialogUI.updateDialogUI(Proj);

  return { updateProjectUI, renderPage };
};
