import { compareAsc, format, eo } from "date-fns";

export class Todos {
  constructor(title, description, dueDate, priority, checked, id) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checked = 0;
    this.id = crypto.randomUUID();
  }

  dueDateParser() {
    const date = new Date(this.dueDate);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    const formattedDate = date.toLocaleDateString("en-US", options);

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
