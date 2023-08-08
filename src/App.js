import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { useState } from "react";

const DummyTodos = [
  {
    id: 1,
    date: new Date("July 1 2023"),
    title: "Read Mgs 511",
    text: "I have to read mgs for two hours",
    done: false,
  },
  {
    id: 2,
    date: new Date("July 1 2023"),
    title: "Cook Jollof rice",
    text: "I must cook rice by 6pm today",
    done: false,
  },
  {
    id: 3,
    date: new Date("August 1 2023"),
    title: "Read CSE 503",
    text: "I have to read 503 for two hours",
    done: false,
  },
];

function App() {
  const [todos, setTodos] = useState(DummyTodos);
  const addTodoHandler = (todo) => {
    setTodos((todos) => {
      return [todo, ...todos];
    });
  };
  const deleteTodoHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const editTodoHandler = (todo) => {
    const todoIndex = todos.findIndex((td) => td.id === todo.id);
    todos[todoIndex] = todo;
    setTodos([...todos]);
  };
  return (
    <div className="mx-4">
      <h1 className="text-center mb-5 mt-2">Todo Application</h1>
      <AddTodo addTodoHandler={addTodoHandler} />
      <TodoList
        todos={todos}
        deleteTodoHandler={deleteTodoHandler}
        editTodoHandler={editTodoHandler}
      />
    </div>
  );
}

export default App;
