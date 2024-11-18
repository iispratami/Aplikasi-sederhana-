
const addButton = document.getElementById('addtask');
const taskinput = document.getElementById('taskinput');
const taklist = document.getElementById('tasklist');



function addtask(){
    const task = taskinput.value.trim();

    if (task){
        createTaskElemen(task);

        taskinput.value= '';
}else{
    alert('please enter a task!')
}
}

addButton.addEventListener('click', addtask);

function createTaskElemen(task){
    const listItem = document.createElement('li');

    listItem.textContent = task;
    const deleteButon = document.createElement('button');
    deleteButon.textContent = 'hapus';
    deleteButon.className = 'deletetask';

    listItem.appendChild(deleteButon);

    tasklist.appendChild(listItem);
    
    listItem.addEventListener('click', function(){
        taklist.removeChild(listItem);
    });
}

function savetasks(){
    taklist.querySelectorAll('li').forEach(function(item) {
        tasks.push(item.textContent.trim());

    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function loadTasks(){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(createTaskElemen);

}