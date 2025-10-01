import "./styles.css";

function Projects() {
  let projectsArray = [];

  let getProjectsArray = function () {
    return projectsArray;
  };

  let addProject = function (project_obj) {
    projectsArray.push(project_obj);
  };

  return { projectsArray, getProjectsArray, addProject };
}

class Project {
  //todo array is an array of todo item objects
  constructor(name, color, id) {
    this.name = name;
    this.color = color;
    this.todosArray = [];
    this.id = id;
  }

  get getTodosSize() {}

  get getTodosArray() {
    return this.todosArray;
  }

  addTodo(todo) {
    this.todosArray.push(todo);
  }

  get getName() {
    return this.name;
  }

  get getColor() {
    return this.color;
  }

  get getId() {
    return this.id;
  }
}

class Todos {
  constructor(title, description, dueDate, priority, checked, id) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checked = 0;
  }

  get getTitle() {
    return this.title;
  }

  set setTitle(title) {}

  get getDate() {
    return this.date;
  }

  get getDescription() {
    return this.description;
  }

  set getDate(date) {}

  get getPriority() {}
  set setPriority(c) {}

  get getChecked() {}
  set setChecked(c) {}
}

function checkTodos(todo) {
  return {};
}

function unCheckTodos(todo) {
  return {};
}

function editTodo(todo) {
  return {};
}

function deleteTodo(todosArray) {
  return {};
}

//DOM stuff

const Proj = Projects();
const task = new Todos(
  "Play Persona 5 Royal",
  "olorum soluta pariatur itaque eligendi nobis praesentium iure tempore. Voluptatem!",
  "11/11/11",
  "priority-color-low",
  0
);

const task2 = new Todos(
  "This should be second.",
  "olorum soluta pariatur itaque eligendi nobis praesentium iure tempore. Voluptatem!",
  "11/11/11",
  "priority-color-medium",
  0
);
const defaultProject = new Project("Default Project", "Blue", [], 1);
const secondProject = new Project("Second Project", "Blue", [], 2);
Proj.addProject(defaultProject);
Proj.addProject(secondProject);
defaultProject.addTodo(task);
defaultProject.addTodo(task2);

console.log(defaultProject.getTodosArray);

console.log(Proj.getProjectsArray());

const pageHandler = function (currentSelectedProject) {
  function clearPageContents() {}

  function addPageContents() {}

  function renderPage(currentSelectedProject) {}
};

const main = function () {
  const currentSelectedProject = defaultProject;

  //renderPage(currentSelectedProject);
  UserInterface();
};

const projectUIHandler = function () {
  const projectContainer = document.querySelector(".projects-container");
  function clearProjectUI(projectContainer) {
    let projectChild = projectContainer.lastElementChild;

    while (projectChild != null) {
      projectContainer.removeChild(projectChild);
      projectChild = projectContainer.lastElementChild;
    }
  }

  let addProjectItem = function (currProject) {
    projectContainer.appendChild(currProject);
  };

  //vv for this we should push it back to array
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

    tag.textContent = "tag";
    projectTitle.textContent = name;

    projectContainer.appendChild(projectItem);
    projectItem.appendChild(tag);
    projectItem.appendChild(projectTitle);
    projectItem.appendChild(editOption);

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

  return { updateProjectsUI };
};

const taskUIHandler = function () {
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
    dateText.textContent = "Random Date for now";

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

const UserInterface = function () {
  //Selecting project container
  const projectUI = projectUIHandler();
  const taskUI = taskUIHandler();

  function setProjectTexts() {}

  function createTaskItem() {
    //task item has:
    //checkmark (prioity)
    //task header (title, icon)
    //task-description
    //task date
  }

  //button
  const addTaskButton = document.querySelector(".add-task");
  const addTaskDialog = document.querySelector("dialog");

  addTaskButton.addEventListener("click", (e) => {
    addTaskDialog.showModal();
  });

  //Updates UI of Project & Tasks
  projectUI.updateProjectsUI(Proj);
  taskUI.updateTasksUI(defaultProject);

  return {};
};

main();
