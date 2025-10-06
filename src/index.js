import "./styles.css";
import { initializeDefault } from "./initialization";
import { eventHandling } from "./events";
import { UserInterface } from "./ui-handlers";

const main = function () {
  //Initialize default project for display &  checks if we have something saved in storage API.
  const { defaultProject } = initializeDefault();

  console.log(defaultProject);

  //If not, this will be our new array
  const currentSelectedProject = defaultProject;

  //Event handling
  const events = eventHandling;

  //Deals with UI
  const mainUI = UserInterface(currentSelectedProject);
};

main();
