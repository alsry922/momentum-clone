const $todoForm = document.querySelector("#todo-form");
const $todoInput = $todoForm.querySelector(".todo-input");
const $todoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";
let todos = [];

/* 
    todoForm submit 이벤트 핸들러
*/
function onSubmitTodoForm(event) {
  event.preventDefault();
  const todo = $todoInput.value;
  $todoInput.value = "";
  const todoObj = {
    todo,
    id: Date.now(),
  };
  todos.push(todoObj);
  addTodo(todoObj);
  saveTodos();
}

/* 
    입력 받은 todo를 todoList에 추가
*/
function addTodo(todoObj) {
  const $todoItem = document.createElement("li");
  $todoItem.id = todoObj.id;
  const $todoText = document.createElement("span");
  const $todoDelete = document.createElement("button");
  $todoText.textContent = todoObj.todo;
  $todoDelete.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  $todoItem.appendChild($todoText);
  $todoItem.appendChild($todoDelete);
  $todoList.appendChild($todoItem);
}
/* 
    todos 배열을 localStorage에 추가
*/
function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}
/* 
    localStorage에 있는 todos 여부를 체크
    있다면 가져와서 todoList에 추가
*/
function setTodos() {
  const savedTodos = localStorage.getItem(TODOS_KEY);
  if (savedTodos !== null) {
    todos = JSON.parse(savedTodos);
    todos.forEach(addTodo);
  }
}
/* 
  이벤트 버블링
  투두리스트 중 버튼이 클릭된 요소 삭제
*/
function onClickTodoList(event) {
  const target = event.target;
  if (target.tagName !== "BUTTON" && target.tagName !== "I") {
    return;
  }

  let current = target;
  while (current.tagName !== "LI") {
    current = current.parentNode;
  }
  current.remove();

  todos = todos.filter((todo) => {
    return todo.id !== parseInt(current.id);
  });
  saveTodos();
}

setTodos();

$todoForm.addEventListener("submit", onSubmitTodoForm);
$todoList.addEventListener("click", onClickTodoList);
