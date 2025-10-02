export class Project {
  //todo array is an array of todo item objects
  constructor(name, color, id) {
    this.name = name;
    this.color = color;
    this.todosArray = [];
    this.id = crypto.randomUUID();
  }

  get getTodosSize() {}

  get getTodosArray() {
    return this.todosArray;
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

  get getColor() {
    return this.color;
  }

  get getId() {
    return this.id;
  }
}
