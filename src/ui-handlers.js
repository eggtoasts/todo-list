import { Proj } from "./projects-model.js";

//DOM stuff

let uiHelpers = function () {
  function clear(taskChild, container) {
    while (taskChild != null) {
      container.removeChild(taskChild);
      taskChild = container.lastElementChild;
    }
  }

  return { clear };
};

export let pageUIHandler = function () {
  const projectTitle = document.querySelector(".project-title");
  const taskUI = taskUIHandler();

  function renderPage(currentProject) {
    taskUI.updateTasksUI(currentProject);

    projectTitle.textContent = currentProject.getName;
  }

  return { renderPage };
};

export const projectUIHandler = function () {
  let pageUI = pageUIHandler();
  const projectContainer = document.querySelector(".projects-container");
  const { clear } = uiHelpers();

  function displayProjectFormSidebarItem() {
    const projectFormItem = createProjectFormSidebarItem();
    console.log(projectFormItem);
    addProjectItem(projectFormItem);

    //Returns the form for event handling
    return projectFormItem;
  }

  function createProjectFormSidebarItem() {
    const projectItem = document.createElement("button");
    const icon = document.createElement("span");
    const projectForm = document.createElement("form");
    const projectInput = document.createElement("input");

    const option = document.createElement("div");
    const projectCancel = document.createElement("span");

    projectItem.setAttribute("class", "project-item project-form");
    icon.setAttribute("class", "icon");
    projectForm.setAttribute("class", "sidebar-form");

    projectInput.setAttribute("type", "text");
    projectInput.setAttribute("id", "sidebar-project-name");
    projectInput.setAttribute("placeholder", "New Project Name");
    projectInput.setAttribute("class", "title");

    option.setAttribute("class", "right-option");
    projectCancel.setAttribute("class", "icon project-cancel");

    icon.textContent = "tag";
    projectCancel.textContent = "cancel";

    projectItem.appendChild(icon);
    const projectFormWrapper = projectItem.appendChild(projectForm);
    projectFormWrapper.appendChild(projectInput);

    const optionWrapper = projectItem.appendChild(option);
    optionWrapper.appendChild(projectCancel);

    return projectItem;
  }

  function clearProjectUI(projectContainer) {
    let projectChild = projectContainer.lastElementChild;

    clear(projectChild, projectContainer);
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

    tag.textContent = "folder_special";
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

  return {
    updateProjectsUI,
    renderPage,
    displayProjectFormSidebarItem,
    pageUI,
  };
};

export const taskUIHandler = function () {
  const taskContainer = document.querySelector(".task-container");
  const { clear } = uiHelpers();

  function clearTaskUI(taskContainer) {
    let taskChild = taskContainer.lastElementChild;

    clear(taskChild, taskContainer);
  }

  function deleteTaskEventAdder(taskDelete, task, project) {
    taskDelete.addEventListener("click", (e) => {
      console.log(task.id);
      project.deleteTodo(task);

      updateTasksUI(project);
    });
  }

  let addTaskItem = function (taskItem) {
    taskContainer.appendChild(taskItem);
  };

  function createTask(task, project) {
    const title = task.title;
    const description = task.description;
    const dueDate = task.dueDate;
    const priority = task.priority;
    const checked = task.checked;
    const id = task.getId;

    const taskItem = document.createElement("div");
    const taskTexts = document.createElement("div");
    const checkmark = document.createElement("button");
    const taskHeader = document.createElement("div");
    const taskTitle = document.createElement("div");

    const taskEdit = document.createElement("button");
    const editIcon = document.createElement("span");

    const taskDelete = document.createElement("button");
    const trashIcon = document.createElement("span");

    const taskDescription = document.createElement("div");

    const taskDate = document.createElement("div");
    const calendarIcon = document.createElement("div");
    const dateText = document.createElement("div");

    //priority
    console.log(priority);

    //Assign all classes
    taskItem.setAttribute("id", id);
    taskItem.setAttribute("class", "task-item");
    taskTexts.setAttribute("class", "task-texts");
    checkmark.setAttribute("class", `checkmark ${priority}`);
    taskHeader.setAttribute("class", "task-header");
    taskTitle.setAttribute("class", "task-title");
    taskEdit.setAttribute("class", "task-edit");
    editIcon.setAttribute("class", "icon");
    taskDelete.setAttribute("class", "task-delete");
    trashIcon.setAttribute("class", "icon");
    taskDescription.setAttribute("class", "task-description");
    taskDate.setAttribute("class", "task-date");
    calendarIcon.setAttribute("class", "icon");
    dateText.setAttribute("class", "task-date-text");

    //Set all text to is corresponding elements

    taskTitle.textContent = title;
    editIcon.textContent = "edit_note";
    trashIcon.textContent = "delete";
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

    const taskDeleteSelector = taskHeaderSelector.appendChild(taskDelete);
    taskDeleteSelector.appendChild(trashIcon);

    //Add ability to delete itself
    deleteTaskEventAdder(taskDeleteSelector, task, project);

    taskTextsSelector.appendChild(taskDescription);

    const taskContainerSelector = taskTextsSelector.appendChild(taskDate);

    taskContainerSelector.appendChild(calendarIcon);
    taskContainerSelector.appendChild(dateText);

    //Add Ability to edit itself
    editTaskEventAdder(taskEditSelector, taskItem, project);

    return taskItem;
  }

  const editTaskEventAdder = function (taskEditButton, taskItem, project) {
    taskEditButton.addEventListener("click", (e) => {
      console.log(taskItem.id);

      //Get the task id from DOM
      const currTaskItem = document.getElementById(taskItem.id);
      let currTaskChild = currTaskItem.lastElementChild;

      //Clear it (We're not deleting it)
      clear(currTaskChild, currTaskItem);

      //find the todo object in project array
      const currTodo = project.findTodoById(taskItem.id);

      //Now add in the edit task (w/ its ID and original title & description)
      const arr = createEditTaskItem(taskItem, currTodo);
      const newEditTaskItem = arr[0],
        cancel = arr[1],
        submit = arr[2],
        title = arr[3],
        desc = arr[4],
        date = arr[5],
        priority = arr[6];

      console.log(newEditTaskItem);
      //Add it to the current container
      currTaskItem.appendChild(newEditTaskItem);

      //If user presses submit, we edit the current item
      // then simply render the page again.
      submit.addEventListener("click", (e) => {
        console.log("found ");
        console.log(currTodo);

        //Set the new item w/ the input
        currTodo.setTitle = title.value;
        currTodo.setDescription = desc.value;
        currTodo.setDate = date.value;
        currTodo.setPriority = priority.value;

        updateTasksUI(project);
      });

      //If the user exits out of the edit container
      // (This happens by):
      // 1) Clicking another page
      // 2) Trying to edit ANOTHER task

      // Clicking anywhere else shouldn't close the edit window
    });
  };

  function createEditTaskItem(taskItem, currTodo) {
    const editTaskItem = document.createElement("div");
    const editTitle = document.createElement("input");
    const editDescription = document.createElement("textarea");

    const taskOptions = document.createElement("div");
    const editDate = document.createElement("input");

    //Priorities
    const editTaskPriorityWrapper = document.createElement("select");
    const priorityColorNone = document.createElement("option");
    const priorityColorLow = document.createElement("option");
    const priorityColorMedium = document.createElement("option");
    const priorityColorHigh = document.createElement("option");

    //Buttons
    const buttonWrapper = document.createElement("div");
    const cancel = document.createElement("button");
    const submit = document.createElement("button");

    //Apply all classes / attributes
    editTaskItem.setAttribute("class", "edit-task-container");
    editTitle.setAttribute("id", "edit-task-title");
    editDescription.setAttribute("id", "edit-task-description");
    editTitle.setAttribute("type", "text");
    editTitle.setAttribute("placeholder", "Enter Title");
    editDescription.setAttribute("placeholder", "(Optional)");

    editTitle.setAttribute("placeholder", "Enter Title");
    editDescription.setAttribute("placeholder", "(Optional)");

    taskOptions.setAttribute("class", "task-options");
    editDate.setAttribute("id", "edit-task-date");
    editDate.setAttribute("type", "date");

    editTaskPriorityWrapper.setAttribute("id", "edit-task-priority");
    priorityColorNone.setAttribute("value", "none");
    priorityColorLow.setAttribute("value", "priority-color-low");
    priorityColorMedium.setAttribute("value", "priority-color-medium");
    priorityColorHigh.setAttribute("value", "priority-color-high");

    priorityColorNone.textContent = "None";
    priorityColorLow.textContent = "Low";
    priorityColorMedium.textContent = "Medium";
    priorityColorHigh.textContent = "High";

    buttonWrapper.setAttribute("class", "task-button-wrapper");
    cancel.setAttribute("class", "edit-task-cancel");
    submit.setAttribute("class", "edit-task-add");

    //Add text content
    cancel.textContent = "Cancel";
    submit.textContent = "Add";

    //Retain original values
    editTitle.value = currTodo.getTitle;
    editDescription.value = currTodo.getDescription;
    editTaskPriorityWrapper.value = currTodo.getPriority;
    editDate.value = currTodo.getDate;

    //Now add them all together ~~

    editTaskItem.appendChild(editTitle);
    editTaskItem.appendChild(editDescription);

    const taskOptionsWrapper = editTaskItem.appendChild(taskOptions);
    taskOptionsWrapper.appendChild(editDate);
    const selector = taskOptionsWrapper.appendChild(editTaskPriorityWrapper);
    selector.appendChild(priorityColorNone);
    selector.appendChild(priorityColorLow);
    selector.appendChild(priorityColorMedium);
    selector.appendChild(priorityColorHigh);

    const buttons = taskOptionsWrapper.appendChild(buttonWrapper);
    buttons.appendChild(cancel);
    buttons.appendChild(submit);

    return [
      editTaskItem,
      cancel,
      submit,
      editTitle,
      editDescription,
      editDate,
      editTaskPriorityWrapper,
    ];
  }
  function createAllTasks(project) {
    console.log(project);
    const todosArray = project.getTodosArray;

    todosArray.forEach((todo) => {
      const newTask = createTask(todo, project);

      //Add newly created task to DOM
      addTaskItem(newTask);

      //Give each task the ability to delete and edit itself
    });
  }

  function updateTasksUI(project) {
    clearTaskUI(taskContainer);
    createAllTasks(project);
  }

  return { updateTasksUI };
};

export const dialogUIHandler = function () {
  //Selecting project container
  const projectDropdown = document.getElementById("add-task-dialog-projects");
  const { clear } = uiHelpers();

  function clearUI(container) {
    let taskChild = container.lastElementChild;

    clear(taskChild, container);
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
  // const pageUI = pageUIHandler();
  const projectUI = projectUIHandler();
  const dialogUI = dialogUIHandler();
  const { renderPage } = projectUI;

  //Updates UI of Project & Tasks
  const updateProjectUI = () => projectUI.updateProjectsUI(Proj);

  //Renders project and dialog UI to our current Project data
  projectUI.renderPage(currentSelectedProject);
  dialogUI.updateDialogUI(Proj);

  return { updateProjectUI, renderPage };
};
