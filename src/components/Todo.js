import { useState } from "react";
import Button from "./Button";
import Date from "./Date";
import EditTodo from "./EditTodo";

const Todo = ({ todo, deleteTodoHandler, editTodoHandler }) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState({});
  const editHandler = (todo) => {
    setEdit(true);
    setEditTodo(todo);
  };
  const cancelClickHandler = () => setEdit(false);
  if (edit) {
    return (
      <EditTodo
        editTodoHandler={editTodoHandler}
        todo={editTodo}
        cancelClickHandler={cancelClickHandler}
      />
    );
  }
  return (
    <div className="card w-50 mt-4 border-0 rounder shadow-sm p-2">
      <h5>{todo.title}</h5>
      <div>{todo.text}</div>
      <div className="d-flex justify-content-between">
        <Date date={todo.date} />
        <div>
          <Button
            otherClassName="mx-2"
            text="Delete"
            clickHandler={() => deleteTodoHandler(todo.id)}
          />
          <Button text="Edit" clickHandler={() => editHandler(todo)} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
