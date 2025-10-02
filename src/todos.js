import { compareAsc, format, eo } from "date-fns";

export class Todos {
  constructor(title, description, dueDate, priority, checked, id) {
    this.title = title;
    this.description = description;
    this.dueDate = this.dueDateParser(dueDate);
    this.priority = priority;
    this.checked = 0;
  }

  dueDateParser(calendarText) {
    const date = new Date(calendarText);
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
