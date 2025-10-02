export function Projects() {
  let projectsArray = [];

  let getProjectsArray = function () {
    return projectsArray;
  };

  let addProject = function (project_obj) {
    projectsArray.push(project_obj);
  };

  return { projectsArray, getProjectsArray, addProject };
}

export const Proj = Projects();
