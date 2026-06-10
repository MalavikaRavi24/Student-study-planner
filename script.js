
        let tasks=[];
        let savedTasks=localStorage.getItem("tasks");
        if(savedTasks){
                tasks=JSON.parse(savedTasks);
        }


        for(let task of tasks){
            createTask(task);
        }



        function createTask(taskObject){
        let newTask=document.createElement("li");
        newTask.innerText=taskObject.task;
        if(taskObject.completed){
            newTask.style.textDecoration="line-through";
        }
        newTask.onclick=function(){
            taskObject.completed=true;
            newTask.style.textDecoration ="line-through";
            localStorage.setItem(
                "tasks",
                JSON.stringify(tasks)
            );
        };
        let deleteButton=document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function(){
            let index=tasks.indexOf(taskObject);
            tasks.splice(index,1);
            localStorage.setItem(
                "tasks",
                JSON.stringify(tasks)
            );
            newTask.remove();
        };
        newTask.appendChild(deleteButton);
        document.getElementById("taskList").appendChild(newTask);

    }



        function addTask(){
            let task=document.getElementById("taskInput").value;
            if (task.trim()===""){
                return;
            }
            
            let taskObject={
                task:task,
                completed:false
            };
            tasks.push(taskObject);
            localStorage.setItem(
                "tasks",
                JSON.stringify(tasks)
            );
            createTask(taskObject); 
            document.getElementById("taskInput").value="";
        }
  
