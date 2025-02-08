# To-Do List Web Application

A simple and interactive To-Do List web application built using **HTML**, **CSS**, and **JavaScript**. This app allows users to add, mark, and delete tasks, with all tasks saved in the browser's local storage for persistence.

![To-Do List Screenshot](images/screenshot.png) <!-- Add a screenshot if you have one -->

---

## Features

- **Add Tasks**: Type a task in the input box and click "Add" to add it to the list.
- **Mark Tasks as Completed**: Click on a task to mark it as completed (strikethrough effect).
- **Delete Tasks**: Click the "×" button next to a task to delete it.
- **Persistent Storage**: Tasks are saved in the browser's local storage, so they remain even after refreshing or closing the page.

---

## How to Use

1. **Add a Task**:
   - Type your task in the input box at the top.
   - Click the "Add" button or press `Enter` to add the task to the list.

2. **Mark a Task as Completed**:
   - Click on a task to mark it as completed. It will be crossed out.

3. **Delete a Task**:
   - Click the "×" button next to a task to remove it from the list.

4. **Refresh the Page**:
   - Your tasks will still be there because they are saved in local storage.

---

## How It Works

### HTML
- The `index.html` file contains the structure of the app, including the input box, "Add" button, and task list.

### CSS
- The `style.css` file styles the app, including the layout, colors, and custom checkboxes.

### JavaScript
- The `ToDo.js` file handles the app's functionality:
  - **Adding Tasks**: Creates a new list item (`<li>`) and appends it to the list.
  - **Marking Tasks**: Toggles the "checked" class to mark/unmark tasks.
  - **Deleting Tasks**: Removes the task from the list when the delete button is clicked.
  - **Saving Data**: Uses `localStorage` to save the list of tasks so they persist after refreshing the page.

---

## Technologies Used

- **HTML**: For the structure of the app.
- **CSS**: For styling and layout.
- **JavaScript**: For interactivity and functionality.
- **Local Storage**: For saving tasks in the browser.

---

## How to Run the Project

1. Clone or download the project files.
2. Open the `index.html` file in your browser.
3. Start adding and managing your tasks!



