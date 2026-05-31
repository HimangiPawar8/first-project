let input = document.querySelector("#taskinput");
let button = document.querySelector("button");
let taskList = document.querySelector("#tasklist");

button.addEventListener("click",addTask);

function addTask() {
    if(input.value === "") {
        alert("please enter a task");
        return;
    }

    let li = document.createElement("li");

    /* checkbox image */

    let image = document.createElement("img");
    image.src = "images/checked.png";

    /* checkbox */

    let checkbox = document.createElement("input");
    checkbox.innerText = image;
    checkbox.type = "checkbox";

    /* task text */

    let span = document.createElement("span");
    span.innerText = input.value;
    span.className = "taskText";

    /* delete button */
    
    let deleteBtn = document.createElement("span");
    deleteBtn.innerText = "";
    deleteBtn.className = "deleteTsk";

    /* add elements inside li */

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    /* add li to list */

    taskList.appendChild(li);

    /* clear input */

    input.value = "";

    /* complete task */

    checkbox.addEventListener("change",
        function() {

            if(checkbox.checked) {
                span.classList.add("completed");
            } else {
                span.classList.remove("completed");
            }
        }
    )

    /* delete task */

    deleteBtn.addEventListener("click",
        function() {
            li.remove();
        }
    )
    
};
