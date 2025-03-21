const container = document.getElementById("container");

const form = document.createElement("form");
const input = document.createElement("input")
const submitButton = document.createElement("input")
const ul = document.createElement("ul");

input.setAttribute("type", "text");
input.placeholder = "Enter a task...";
submitButton.setAttribute("type", "submit");
form.setAttribute("id", "form");


form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (input.value.trim() === "") return;
    
    const li = document.createElement("li");
    li.classList.add("task-item");
    
    const taskText = document.createElement("span");
    taskText.textContent = input.value;

    const button = document.createElement("button");
    button.textContent = "X";
    button.classList.add("remove-task-button");
    
    
    button.addEventListener("click", function() {
        li.remove();
    })

    li.append(taskText, button);
    ul.appendChild(li);
    input.value = "";

})

form.append(input, submitButton)

container.append(form, ul)
