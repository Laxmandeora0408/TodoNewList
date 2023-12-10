# React Todo List Component

## State Initialization

- The component uses the `useState` hook to manage state variables.
- `toods` is an array of tasks, where each task is an object with properties such as `task`, `id`, `done`, `editing`, and `editedContent`.
- `newTood` is a string used to track the value of the input field for adding new tasks.

## Add New Task

- The `addNewTask` function is called when the "Add" button is clicked.
- It creates a new task object with the entered task and a unique ID using the `uuidv4` library.
- The new task is then added to the `toods` array, and the input field is cleared.

## Update Todo Value

- The `updateTodoValue` function updates the `editedContent` property of a task as the user types in the input field during editing.

## Delete Task

- The `deleteTask` function removes a task from the `toods` array based on its ID.

## Uppercase Transformation

- The `upperCase` function converts all tasks in the list to uppercase using the `toUpperCase` method.

## Uppercase Transformation for a Specific Task

- The `upperCaseOne` function converts the task with a specific ID to uppercase.

## Mark Task as Done

- The `markDone` function toggles the `done` property of a task, marking it as done or undone.

## Toggle Edit Mode

- The `toggleEdit` function toggles the `editing` property of a task, enabling or disabling the editing mode.

## Save Edited Task

- The `saveEditedTask` function saves the edited content of a task, updating the task's `task` property and turning off editing mode.

## Input Value Handler

- The `newValue` function updates the `newTood` state as the user types in the input field for adding new tasks.

## Render UI

- The component renders an input field for adding new tasks, a list of tasks with buttons for various actions (delete, edit, mark as done), and a button to convert all tasks to uppercase.

## Conditional Rendering

- The code uses conditional rendering to switch between displaying the task text or an input field when editing a task.
