import "./styles.css";
import { initializeDefault } from "./initialization";
import { eventHandling } from "./events";
import { UserInterface } from "./ui-handlers";
import { Storage } from "./storage";

const main = function () {
  //Check if we have something saved in storage API.
  const storage = Storage();

  //Initialize default project for display
  const { defaultProject } = initializeDefault();

  //If not, this will be our new array
  const currentSelectedProject = defaultProject;

  //Event handling
  const events = eventHandling;

  //Deals with UI
  const mainUI = UserInterface(currentSelectedProject);

  //not needed we do it in updateUI
  // mainUI.updateProjectUI();
};

main();
