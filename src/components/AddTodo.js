import { useState } from "react";
import "./AddTodo.css";
import Button from "./Button";
import AddTodoForm from "./AddTodoForm";

const AddTodo = ({ addTodoHandler }) => {
  const [add, setAdd] = useState(false);
  const addClickHandler = () => setAdd(true);
  const cancelClickHandler = () => setAdd(false);
  return (
    <div>
      {!add && <Button text="Add" clickHandler={addClickHandler} />}
      {add && (
        <AddTodoForm
          addTodoHandler={addTodoHandler}
          cancelClickHandler={cancelClickHandler}
        />
      )}
    </div>
  );
};
export default AddTodo;
