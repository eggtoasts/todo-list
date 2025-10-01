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

  get getTitle() {}

  set setTitle(title) {}

  get getDate() {}

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
const task = new Todos("w", "w", "11/11/11", "None", 0);
const defaultProject = new Project("Default Project", "Blue", [], 1);
Proj.addProject(defaultProject);
defaultProject.addTodo(task);

console.log(defaultProject.getTodosArray);

console.log(Proj.getProjectsArray());

function clearProjectUI(projectContainer) {
  let projectChild = projectContainer.lastElementChild;

  while (projectChild != null) {
    projectContainer.removeChild(projectChild);
    projectChild = projectContainer.lastElementChild;
  }
}

function clearTaskUI(taskContainer) {
  let taskChild = taskContainer.lastElementChild;

  while (taskChild != null) {
    taskContainer.removeChild(taskChild);
    taskChild = taskContainer.lastElementChild;
  }
}

function updateProjectsUI(projectContainer, projects) {
  clearProjectUI(projectContainer);

  //We go through every project in the Projects array.
  const projectsArray = projects.getProjectsArray();
  projectsArray.forEach((projectItem) => {
    console.log("Created a Project item ");

    const projectElements = createProjectItem(projectItem);
    addProjectItem(projectElements);
  });
}

function updateTasksUI(taskContainer, project) {
  clearTaskUI(taskContainer);
  const todosArray = project.getTodosArray;
}

let addProjectItem = function (projectElements) {
  const projectItem = document.querySelector(".project-item");
  console.log(projectItem);

  for (let elements of projectElements) {
    console.log(elements);
    projectItem.appendChild(elements);
  }
};

//vv for this we should push it back to array
let createProjectItem = function (project) {
  //project has name, color, id
  const projectContainer = document.querySelector(".projects-container");
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

  console.log("editOption" + editOption);

  return [tag, projectTitle, editOption];
};

function setProjectTexts() {}

function createTaskItem() {
  //task item has:
  //checkmark (prioity)
  //task header (title, icon)
  //task-description
  //task date
}

//to create the project Item
function readAddTaskInput() {}

const UserInterface = function () {
  //Selecting project container
  const projectContainer = document.querySelector(".projects-container");
  const taskContainer = document.querySelector(".task-container");
  console.log(taskContainer);

  //button
  const addTaskButton = document.querySelector(".add-task");
  const addTaskDialog = document.querySelector("dialog");

  addTaskButton.addEventListener("click", (e) => {
    addTaskDialog.showModal();
  });

  //Updates UI of Project & Tasks (commented out for now)
  updateProjectsUI(projectContainer, Proj);
  updateTasksUI(taskContainer, defaultProject);

  return {};
};

UserInterface();
