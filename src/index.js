import "./styles.css";

function Projects() {
  let projectsArray = [];

  let getProjectsArray = function () {
    projectsArray;
  };

  let addProject = function (project_obj) {
    projectsArray.push(project_obj);
  };

  return { getProjectsArray, addProject };
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

const Proj = Projects("Project 1", "Red", 1);
const task = new Todos("w", "w", "11-11-11", "None", 0);
const randomProject = new Project("Random_Task", "Blue", [], 1);
Proj.addProject(randomProject);
randomProject.addTodo(task);

console.log(randomProject.todosArray);

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

function updateProjectsUI(projectContainer, projectsArrau) {
  clearProjectUI(projectContainer);
}

function updateTasksUI(taskContainer, todosArray) {
  clearTaskUI(taskContainer);
  todosArray.forEach((e) => {
    //make a div object
    //then add it into the task container
    //createProjectItem();
  });
}

function createProjectItem() {}

const UserInterface = function () {
  //Selecting project container
  const projectContainer = document.querySelector(".projects-container");
  const taskContainer = document.querySelector(".task-container");
  console.log(taskContainer);

  //button
  const addTaskButton = document.querySelector(".add-task");
  const addTaskDialog = document.querySelector("dialog");

  addTaskButton.addEventListener("click", (e) => {
    console.log("Bruh");
    addTaskDialog.showModal();
  });

  //Updates UI of Project & Tasks (commented out for now)
  // updateProjectsUI(projectContainer);
  // updateTasksUI(taskContainer);

  return {};
};

UserInterface();
