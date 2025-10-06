import { Projects } from "./projects-model";
import { Project } from "./project";
import { Todos } from "./todos";

export function Storage() {
  let id = crypto.randomUUID();
  let id2 = crypto.randomUUID();

  const testCase = Projects();
  testCase.addProject(new Project("Test", [], id));
  testCase.addProject(new Project("Test2", [], id2));
  const tod = new Todos(
    "Test Todo 1",
    "",
    "10-12-2025",
    "priority-color-low",
    0,
    crypto.randomUUID()
  );
  testCase.findProjectById(id).addTodo(tod);

  console.log(testCase);

  //String to obj.
  let parser = function (str) {
    const obj = JSON.parse(str);

    let newProjectsArray = [];

    for (let proj of obj) {
      let parsedObj = JSON.parse(proj);

      let todoArray = [];

      for (let todo of parsedObj.todosArray) {
        const newTodo = new Todos(
          todo.title,
          todo.description,
          todo.dueDate,
          todo.priority,
          todo.checked,
          todo.id
        );
        todoArray.push(newTodo);
      }

      let parsedProject = new Project(parsedObj.name, todoArray, parsedObj.id);
      newProjectsArray.push(parsedProject);
    }

    return newProjectsArray;
  };

  //Object to string.
  let stringer = function (projects) {
    let str = [];

    for (let proj of projects) {
      let s = [];
      for (let todo of proj.getTodosArray) {
        s.push(todo);
      }

      let stringifiedProject = JSON.stringify({
        name: proj.getName,
        todosArray: s,
        id: proj.getId,
      });

      str.push(stringifiedProject);
    }

    str = JSON.stringify(str);

    return str;
  };

  let setStorage = function (projectArray) {
    //Turn the project array into JSON format w/ the stringify method
    const projectArrayJSON = stringer(projectArray);

    console.log(projectArrayJSON);
    localStorage.setItem("projectsArray", projectArrayJSON);
  };

  const jsonTest = stringer(testCase.getProjectsArray());
  const newProjectsArray = parser(jsonTest);

  return { parser, stringer, setStorage };
}
