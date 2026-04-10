// Add event listeners to the edit buttons when the dom loads
document.addEventListener("DOMContentLoaded", function() {
    const editButtons = document.querySelectorAll('.edit-button');
    editButtons.forEach(button => {
        button.addEventListener('click', editButtonEvent);
    });
});
    
function editButtonEvent(event){
    // Find the task to edit and its buttons
    const editButton = event.target;
    const parentLi = editButton.parentNode;
    const completeForm = parentLi.querySelector('.complete-form')
    const statusText = parentLi.querySelector('.status-text');
    const deleteForm = parentLi.querySelector('.delete-form')
    const confirmForm = parentLi.querySelector('.edit-form');

    // Grab the tasks text to save
    const task = parentLi.querySelector('.task-name');
    const taskText = task.innerText;

    // Create the cancel button and replace the edit button
    const cancelButton = document.createElement(`button`);
    cancelButton.type = 'button';
    cancelButton.classList.add('cancel-button');
    cancelButton.innerText = 'Cancel Edit';
    cancelButton.addEventListener('click', cancelEditButtonEvent);
    
    // Create the textbox to replace the span
    const textBox = document.createElement(`input`);
    textBox.classList.add('new-task-name');
    textBox.type = 'text';
    textBox.name = 'task';
    textBox.value = taskText;
    
    // Hide the original text and buttons and show the confirm buttons
    editButton.style.display = 'none';
    task.style.display = 'none';
    statusText.style.display = 'none';
    completeForm.style.display = 'none';
    deleteForm.style.display = 'none';
    confirmForm.style.display = 'inline';

    // Add the new elements to the page
    confirmForm.prepend(textBox);
    parentLi.append(cancelButton);

};

function cancelEditButtonEvent(event){
    // Find the task and its elements
    const cancelButton = event.target;
    const parentLi = cancelButton.parentNode;
    const editButton = parentLi.querySelector('.edit-button');
    const completeForm = parentLi.querySelector('.complete-form');
    const statusText = parentLi.querySelector('.status-text');
    const deleteForm = parentLi.querySelector('.delete-form');
    const confirmForm = parentLi.querySelector('.edit-form');
    const task = parentLi.querySelector('.task-name');
    const editedTask = confirmForm.querySelector('.new-task-name');

    // Unhide the forms and hide the edit form
    completeForm.style.display = 'inline';
    deleteForm.style.display = 'inline';
    task.style.display = 'inline';
    editButton.style.display = 'inline'
    statusText.style.display = 'inline';

    // Hide the confirm form and remove the text box and cancel button
    confirmForm.style.display = 'none';
    parentLi.removeChild(cancelButton);
    confirmForm.removeChild(editedTask);

};