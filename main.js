let button = document.querySelector("#fetchBtn");
let root = document.querySelector("#root");

button.addEventListener("click", getData);

 async function getData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await res.json();
    displayTodos(data);
}

function displayTodos(todos) {
   todos.forEach((todo) => {
    // container div    
    let div = document.createElement("div");
    div.id = "child"

    // id creation 
    let id = document.createElement("p");
    id.textContent = todo.id;

    // title creation
    let title = document.createElement("p");
    title.textContent = todo.title;

    // completed creation
    let completed = document.createElement("p");
    completed.textContent = todo.completed ? "Completed" : "Not Completed";

    // appending to div
    div.append(id,title,completed);
    root.append(div);
   })
}

