export function Projects() {
  let projectsArray = [];

  let getProjectsArray = function () {
    return projectsArray;
  };

  let countAllTodays = function () {
    let count = 0;
    for (let proj of projectsArray) {
      count += proj.getTodayTodos();
    }

    return count;
  };

  let countAllOverdues = function () {
    let count = 0;
    for (let proj of projectsArray) {
      count += proj.getOverdueTodos();
    }

    return count;
  };

  let countAllProjects = function () {
    let count = 0;
    for (let proj of projectsArray) {
      count += proj.getTodosSize();
    }

    return count;
  };

  let addProject = function (project_obj) {
    projectsArray.push(project_obj);
  };

  let deleteProject = function (projectId) {
    projectsArray = projectsArray.filter((e) => projectId !== e.getId);
  };

  let findProjectById = function (projectId) {
    const currentProject = getProjectsArray().find((e) => e.id === projectId);

    return currentProject;
  };

  return {
    projectsArray,
    getProjectsArray,
    addProject,
    findProjectById,
    countAllProjects,
    countAllTodays,
    countAllOverdues,
    deleteProject,
  };
}

export const Proj = Projects();
