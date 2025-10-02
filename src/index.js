import "./styles.css";
import { initializeDefault } from "./initialization";
import { eventHandling } from "./events";
import { UserInterface } from "./ui-handlers";

const main = function () {
  //Initialize default project for display
  const { defaultProject } = initializeDefault();
  const currentSelectedProject = defaultProject;

  //Event handling
  const events = eventHandling;

  //Deals with UI
  const mainUI = UserInterface(currentSelectedProject);
  mainUI.updateProjectUI();
};

main();
