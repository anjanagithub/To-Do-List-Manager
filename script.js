//selecting all elements needed
const form=document.querySelector("#form")
const user_input=document.getElementById("text-field")
const taskList=document.querySelector(".task-list")

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    

    //getting input from user
   const userTask=user_input.value.trim()
    if(userTask==="" || userTask==0 || !isNaN(userTask) || Number(userTask)<0){
       alert("Enter Valid input")
       return //stop fruther execution of if input is not valid
    }

    // If input is valid, create a new task item
    addTasktoList(userTask)

    user_input.value="" //clearning the inputfeild

});

function addTasktoList(userTask){
    const list=document.createElement("li")
    //creating span for adding task 
    const task_span=document.createElement("span")
    task_span.textContent=userTask
    list.appendChild(task_span)

    //creating delete button to add in tasklist along with each task
    const delete_button=document.createElement("button")
    delete_button.textContent="Delete"
    list.appendChild(delete_button)   //adding delete button to list

    //appending the list to task-list
    taskList.appendChild(list)
    //adding delete functionality to delete button
    delete_button.addEventListener("click",()=>{
        taskList.removeChild(list)
    })
}


