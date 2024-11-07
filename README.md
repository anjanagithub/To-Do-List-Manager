# To-Do-List-Manager
This project is a basic Task Manager application designed to help users add and manage tasks.
Users can input a task in a form, which is then displayed in a list below. Each task is shown with the task text and
a delete button that allows the user to remove it from the list. The project focuses on handling user input, validating data, 
and using JavaScript for DOM manipulation, making it a great introductory exercise in form handling and interactive web applications.

# Features:
1. Task Addition: Users can enter a task in an input field. After clicking the submit button, the task is added to the list if it meets certain validation criteria.
2. Input Validation: The app checks that the input is a non-empty string and not a number, zero, or negative value. If the input is invalid,
    an alert prompts the user to enter a valid task.
3. Dynamic Task Display: Each task is dynamically displayed in an unordered list on the page. The task text is displayed within a span,
   and each task entry includes a delete button.
4. Task Deletion: Users can remove tasks individually by clicking the delete button, which deletes the respective task item from the list.

# Technical Summary:
1. HTML: Provides structure with a form for task input and a list for displaying tasks.
2. CSS:  For basic styling of elements like the form and task list.
3. JavaScript: Core logic to handle form submission, validate input, create tasks, append them to the list, and add delete functionality.
