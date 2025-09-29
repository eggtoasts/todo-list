import "./styles.css";

function Projects() {
  let projectsArray = [];

  let getProjectsArray = function () {
    projectsArray;
  };

  let addProject = function (project_obj) {
    projectsArray.push(project_obj);
  };

  return { getProjectsArray };
}

class Project {
  //todo array is an array of todo item objects
  constructor(name, color, todosArray, id) {}

  get getTodosSize() {}
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

const UserInterface = function () {
  return {};
};
