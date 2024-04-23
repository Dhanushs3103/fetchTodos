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
       
   })
}

