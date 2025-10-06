import { Projects } from "./projects-model";
import { Project } from "./project";
import { Todos } from "./todos";

export function Storage() {
  let id = crypto.randomUUID();

  const testCase = Projects();
  testCase.addProject(new Project("Test", [], id));
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
      console.log(parsedObj);

      let todoArray = [];

      for (let todo of parsedObj.todosArray) {
        let newTodo = new Todos(
          todo.title,
          todo.description,
          todo.date,
          todo.priority,
          todo.checked,
          todo.id
        );

        todoArray.push(todoArray);
      }

      let parsedProject = new Project(parsedObj.name, todoArray, parsedObj.id);

      newProjectsArray.push(parsedProject);
    }
    return newProjectsArray;
  };

  //Object to string.
  let stringer = function (obj) {
    let str = [];

    let projects = obj.getProjectsArray();

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

  const jsonTest = stringer(testCase);
  const newProjectsArray = parser(jsonTest);

  return {};
}
