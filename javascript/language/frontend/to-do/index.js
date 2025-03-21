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
    
    const li = document.createElement("li");
    li.textContent = input.value

    ul.appendChild(li)
})

form.append(input, submitButton)

container.append(form, ul)
