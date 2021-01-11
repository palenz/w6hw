var list = document.getElementById('task-list');

function taskList() {
    
    var task = document.getElementById('task').value;

    
    
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(task));
    list.appendChild(entry);
}