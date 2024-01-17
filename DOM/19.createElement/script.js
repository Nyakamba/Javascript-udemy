//  Function to create a new task

function createTask(newTask) {
  //Create a new div  to hold the task

  const taskEl = document.createElement("div");
  //add new css to the created element

  //taskEl.setAttribute("class", "task");
  taskEl.className = "task";

  // Create a text node containing the task text

  const taskTextNodeEl = document.createTextNode(newTask);

  taskEl.appendChild(taskTextNodeEl);

  //append the task to the container div
  document.getElementById("container").appendChild(taskEl);
  console.log(taskTextNodeEl);
  console.log(taskEl);
}

createTask("Programming");
createTask("Go Shopping");
createTask("Meeting");
createTask("Studying");
