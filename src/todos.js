import {
  compareAsc,
  format,
  eo,
  parseISO,
  isPast,
  isToday,
  isYesterday,
} from "date-fns";

export class Todos {
  constructor(title, description, dueDate, priority, checked, id) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checked = checked;
    this.id = id;
  }

  checkIfTodoYesterday() {
    const date = new Date(parseISO(this.dueDate));
    if (isYesterday(date) === true) return true;
    return false;
  }

  checkIfTodoToday() {
    const date = new Date(parseISO(this.dueDate));
    if (isToday(date) === true) return true;
    return false;
  }

  checkIfTodoOverdue() {
    const date = new Date(parseISO(this.dueDate));
    if (isPast(date) === true && isToday(date) !== true) return true;
    return false;
  }

  dueDateParser() {
    const date = new Date(parseISO(this.dueDate));

    const formattedDate = format(date, "MMM dd, yyyy");

    return formattedDate;
  }

  get getTitle() {
    return this.title;
  }

  get getId() {
    return this.id;
  }

  get getDate() {
    return this.dueDate;
  }

  get getDescription() {
    return this.description;
  }

  set setDate(dueDate) {
    this.dueDate = dueDate;
  }

  set setTitle(title) {
    this.title = title;
  }

  get getPriority() {
    return this.priority;
  }

  set setPriority(priority) {
    this.priority = priority;
  }

  set setDescription(description) {
    this.description = description;
  }

  get getChecked() {}
  set setChecked(c) {}
}
