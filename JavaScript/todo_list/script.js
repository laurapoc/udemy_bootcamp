window.setTimeout(function() {
  let todos = [];
  let input = prompt("What would you like to do?");
  while (input !== "quit") {
    if (input == "list") {
      addTodos();
    } else if (input == "new") {
      addTodo();
    } else if (input == "delete") {
      deleteTodo();
    }
    input = prompt("What would you like to do?");
  }
  console.log("OK, YOU QUIT THE APP");

  function addTodos() {
    console.log("********************");
    todos.forEach(function(todo, index) {
      console.log(index + ". " + todo);
    });
    console.log("********************");
  }

  function addTodo() {
    let newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("Added todo");
  }
  function deleteTodo() {
    let indexToDelete = prompt("Enter index of todo to delete");
    todos.splice(indexToDelete, 1);
    console.log("Deleted todo");
  }
}, 500);
