export class Project {
  //todo array is an array of todo item objects
  constructor(name, color, id) {
    this.name = name;
    this.color = color;
    this.todosArray = [];
    this.id = crypto.randomUUID();
  }

  getTodosSize() {
    return this.todosArray.length;
  }

  get getTodosArray() {
    return this.todosArray;
  }

  findTodoById(projectId) {
    const currentTodo = this.getTodosArray.find((e) => e.id === projectId);

    return currentTodo;
  }

  addTodo(todo) {
    this.todosArray.push(todo);
  }

  deleteTodo(todo) {
    this.todosArray = this.todosArray.filter((e) => e.getId !== todo.getId);
  }

  get getName() {
    return this.name;
  }

  set setName(name) {
    this.name = name;
  }

  get getColor() {
    return this.color;
  }

  get getId() {
    return this.id;
  }
}
