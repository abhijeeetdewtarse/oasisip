const taskInput = document.querySelector('#input-task');

const taskList = document.querySelector('#task-list');


// adding items
document.querySelector('form').addEventListener("submit",
    e => {
        e.preventDefault();
        const task = taskInput.value;
        const newTask = document.createElement('li');

        newTask.innerHTML = `<input type = 'checkbox' id = 'task-${taskList.children.length}'>
    <label for = 'task-${taskList.children.length}'></label>${task}`;
        newTask.classList.add('task');
        taskList.appendChild(newTask);

        // clear input
        taskInput.value = '';
    });

// removing items
taskList.addEventListener('click', e => {
    if (e.target.tagName === 'INPUT')
        e.target.parentElement.style.textDecoration = e.target.checked ? 'line-through' : 'none';
});
Footer