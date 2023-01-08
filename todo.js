const todoForm =document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList =document.querySelector("#todo-list");
const TODOS_KEY = "todos";
let toDos =[]

function saveTodos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(toDos => toDos.id !== parseInt(li.id))
    li.remove();
    saveTodos();
}

function paintTodo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "       <X>";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText =newTodoObj.text ;
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value ="";
    const newTodoObj = {
        text :newTodo,
        id:Date.now()
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit",handleToDoSubmit);


const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null ){
    const parsedToDos = JSON.parse(savedTodos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}
