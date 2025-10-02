export class Todos {
  constructor(title, description, dueDate, priority, checked, id) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checked = 0;
  }

  get getTitle() {
    return this.title;
  }

  set setTitle(title) {}

  get getDate() {
    return this.date;
  }

  get getDescription() {
    return this.description;
  }

  set getDate(date) {}

  get getPriority() {}
  set setPriority(c) {}

  get getChecked() {}
  set setChecked(c) {}
}
