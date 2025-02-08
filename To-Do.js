// Step 1: Get references to the input box and the list container from the HTML
const inputBox = document.getElementById("input-box"); // The input field where users type their tasks
const listContainer = document.getElementById("list-container"); // The unordered list (<ul>) where tasks will be displayed

// Step 2: Define the function to add a new task
function addTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        alert("You must write something!"); // Show an alert if the user tries to add an empty task
    } else {
        // If the input is not empty, create a new list item (<li>)
        let li = document.createElement("li"); // Create a new <li> element
        li.innerHTML = inputBox.value; // Set the text of the <li> to the value from the input box

        // Add the new <li> to the list container (<ul>)
        listContainer.appendChild(li);

        // Create a delete button (span) for the task
        let span = document.createElement("span"); // Create a new <span> element
        span.innerHTML = "\u00d7"; // Set the inner HTML of the span to the "×" symbol (this will act as the delete button)
        li.appendChild(span); // Add the delete button (<span>) inside the <li>
    }

    // Clear the input box after adding the task
    inputBox.value = "";

    // Save the updated list to local storage so it persists even after the page is refreshed
    saveData();
}

// Step 3: Add a click event listener to the list container
listContainer.addEventListener("click", function (e) {
    // Check if the clicked element is a list item (<li>)
    if (e.target.tagName === "LI") {
        // Toggle the "checked" class on the list item to mark/unmark the task as completed
        e.target.classList.toggle("checked");

        // Save the updated list to local storage
        saveData();
    }
    // Check if the clicked element is a delete button (<span>)
    else if (e.target.tagName === "SPAN") {
        // Remove the parent element of the delete button (which is the <li>)
        e.target.parentElement.remove();

        // Save the updated list to local storage
        saveData();
    }
}, false);

// Step 4: Define a function to save the current state of the list to local storage
function saveData() {
    // Save the inner HTML of the list container (<ul>) to local storage under the key "data"
    localStorage.setItem("data", listContainer.innerHTML);
}

// Step 5: Define a function to load and display tasks from local storage
function showTask() {
    // Retrieve the saved data from local storage and set it as the inner HTML of the list container
    listContainer.innerHTML = localStorage.getItem("data");
}

// Step 6: Call the showTask function when the page loads to display any saved tasks
showTask();
