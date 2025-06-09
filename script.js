const todoList = document.getElementById("todo-list");
const taskInput = document.getElementById("task-input");
const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (taskInput.value.trim() !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = taskInput.value.trim();

        // Add a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", () => {
            listItem.remove();
        });
        listItem.appendChild(deleteButton);

        // Add a complete button
        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.classList.add("complete");
        completeButton.addEventListener("click", () => {
            listItem.classList.toggle("completed"); // Toggle the 'completed' class
        });
        listItem.appendChild(completeButton);

        todoList.appendChild(listItem);
        taskInput.value = "";
    }
});