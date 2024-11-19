let addTask= document.getElementsByClassName("task btn")[0];

addTask.addEventListener("click", function(){
    let taskInput = document.getElementsByClassName("task title")[0];
    let taskTitleText = taskInput.value;

    let taskDescription = document.getElementsByClassName("task description")[0];
    let taskDescriptionText = taskDescription.value;

    if(taskInput.value === "" || taskDescription.value === ""){
        alert("Please enter a task title and description");
        return;
    }
    
    let taskItemTitle = document.createElement("li");
    taskItemTitle.innerText = taskTitleText;
    taskItemTitle.className = "task-tittle";

    let btn = document.createElement("button");
    btn.innerText = "🗑️";  
    btn.className = "task-btn";

    let taskItemDescription = document.createElement("li");
    taskItemDescription.innerText =taskDescriptionText;
    taskItemDescription.className = "task-description";

    let div= document.createElement("div");
    div.className = "task-header";
    div.appendChild(taskItemTitle);
    div.appendChild(btn);
  
    let taskAdd={
        taskTitle: taskTitleText,
        taskDescription: taskDescriptionText 
    }

    let taskList = JSON.parse(localStorage.getItem("taskList")) || [];
     
    if(!Array.isArray(taskList)){
        taskList = [];
    }
    
    taskList.push(taskAdd);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    
    let taskListSaved = document.getElementsByClassName("task-list-container")[0];
    taskListSaved.appendChild(div);
    taskListSaved.appendChild(taskItemDescription);

    taskInput.value = "";
    taskDescription.value = "";

    btn.addEventListener("click", function() {
        
        div.remove();
        taskItemDescription.remove();

        
        taskList = taskList.filter(task => task.taskTitle !== taskTitleText || task.taskDescription !== taskDescriptionText);
        localStorage.setItem("taskList", JSON.stringify(taskList));
    });
});
window.onload = function(){
    let taskList = JSON.parse(localStorage.getItem("taskList")) || [];
    let taskListContainer = document.getElementsByClassName("task-list-container")[0];
    taskList.forEach(task => {
            let taskTitle = document.createElement("li");
            taskTitle.innerText = task.taskTitle;
            taskTitle.className = "task-tittle";
                        
            let btn = document.createElement("button");
            btn.innerText = "🗑️";  
            btn.className = "task-btn";
            
            let taskDescription = document.createElement("li");
            taskDescription.innerText = task.taskDescription;
            taskDescription.className = "task-description";

            let div= document.createElement("div");
            div.className = "task-header";
            div.appendChild(taskTitle);
            div.appendChild(btn);

            taskListContainer.appendChild(div);
            taskListContainer.appendChild(taskDescription);
        });
}
