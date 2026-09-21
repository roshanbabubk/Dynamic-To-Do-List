const taskInput = document.querySelector("#taskInput");
const addTask = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");

const allBtn = document.querySelector("#allBtn");
const activeBtn = document.querySelector("#activeBtn");
const doneBtn = document.querySelector("#doneBtn");


// ADD TASK
addTask.addEventListener("click", function () {

    const taskText = taskInput.value;

    // Don't allow empty tasks
    if (taskText === "") {
        return;
    }

    // Create task
    const task = document.createElement("li");

    task.textContent = taskText;


    // Create Delete button
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";


    // Delete task
    deleteButton.addEventListener("click", function (event) {

        event.stopPropagation();

        task.remove();

    });


    // Add Delete button to task
    task.appendChild(deleteButton);


    // Complete / Uncomplete task
    task.addEventListener("click", function () {

        task.classList.toggle("completed");

    });


    // Add task to list
    taskList.appendChild(task);


    // Clear input
    taskInput.value = "";

});


// ALL FILTER
allBtn.addEventListener("click", function () {

    const tasks = taskList.querySelectorAll("li");

    tasks.forEach(function (task) {

        task.style.display = "flex";

    });

});


// ACTIVE FILTER
activeBtn.addEventListener("click", function () {

    const tasks = taskList.querySelectorAll("li");

    tasks.forEach(function (task) {

        if (task.classList.contains("completed")) {

            task.style.display = "none";

        } else {

            task.style.display = "flex";

        }

    });

});


// DONE FILTER
doneBtn.addEventListener("click", function () {

    const tasks = taskList.querySelectorAll("li");

    tasks.forEach(function (task) {

        if (task.classList.contains("completed")) {

            task.style.display = "flex";

        } else {

            task.style.display = "none";

        }

    });

});