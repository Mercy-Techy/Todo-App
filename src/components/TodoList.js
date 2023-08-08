import Todo from "./Todo";

const TodoList = ({ todos, deleteTodoHandler, editTodoHandler }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodoHandler={deleteTodoHandler}
          editTodoHandler={editTodoHandler}
        />
      ))}
    </div>
  );
};

export default TodoList;
