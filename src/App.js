import "./App.css";
import { useState } from "react";

function App() {
  let [todolist, setTodolist] = useState([]);

  let saveTodo = (event) => {
    let todoName = event.target.toname.value;
    if (!todolist.includes(todoName)) {
      let finalTodoList = [...todolist, todoName];
      setTodolist(finalTodoList);
    } else {
      alert(`${todoName} already exist`);
    }
    event.preventDefault();
  };

  let item = todolist.map((value, index) => {
    return (
      <TodoItems
        value={value}
        key={index}
        indexNumber={index}
        todolist={todolist}
        setTodolist={setTodolist}
      />
    );
  });

  return (
    <div className="App">
      <h1>Todo-List</h1>
      <form onSubmit={saveTodo}>
        <input type="text" name="toname" /> <button type="submit">Save</button>
      </form>

      <div className="listItems">
        <ul>{item}</ul>
      </div>
    </div>
  );
}

export default App;

function TodoItems({ value, indexNumber, todolist, setTodolist }) {
  let [status, setStatus] = useState(false);
  let deleteRow = () => {
    let finalList = todolist.filter((v, i) => i != indexNumber);
    console.log(finalList);
    setTodolist(finalList);
  };

  let checkItem = () => {
    setStatus(!status);
  };

  return (
    <li className={status ? "completeItem" : ""} onClick={checkItem}>
      {indexNumber + 1}: {value} <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
