 let todoItems = ["Mark Attendance", "submit assignment"];
let doneItems = [];

const todo = document.getElementById("todo");
Window.addEventListener("DOMCon")
const todo = document.getElementById("done");

const add = document.getElementById("add");
add.addEventListener("click",(e) => {
    const item = document.getElementById("item").value;
    todoItems.unshift(item);
    displayTodos();
});


function displayTodos() {
todoItems.foreach((item) => {
  let li = document.createElement("li");
  li.innerHTML = '<input type="checkbox">' + item;
  todo.appendChild(li);
});
}