export function Projects() {
  let projectsArray = [];

  let getProjectsArray = function () {
    return projectsArray;
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
  };
}

export const Proj = Projects();
