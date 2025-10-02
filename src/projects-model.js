export function Projects() {
  let projectsArray = [];

  let getProjectsArray = function () {
    return projectsArray;
  };

  let addProject = function (project_obj) {
    projectsArray.push(project_obj);
  };

  let findProjectById = function (projectId) {
    const currentProject = getProjectsArray().find((e) => e.id === projectId);

    return currentProject;
  };

  return { projectsArray, getProjectsArray, addProject, findProjectById };
}

export const Proj = Projects();
