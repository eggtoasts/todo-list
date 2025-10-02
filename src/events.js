export const eventHandling = (function () {
  //button
  const addTaskButton = document.querySelector(".add-task");
  const addTaskDialog = document.querySelector(".add-task-dialog");
  const addTaskSubmit = document.querySelector(".submit-add-task");
  const addTaskCancel = document.querySelector(".cancel-add-task");
  console.log(addTaskSubmit);

  addTaskButton.addEventListener("click", (e) => {
    addTaskDialog.showModal();
  });

  addTaskSubmit.addEventListener("click", (e) => {
    e.preventDefault();
  });

  addTaskCancel.addEventListener("click", (e) => {
    e.preventDefault();
    addTaskDialog.close();
  });

  return {};
  //add task dialog handling
})();
