import Todo from "./Todo";

const TodoList = (props) => {
  const filteredData = props.data.filter(
    (todo) => todo.status === props.statusRequirement
  );
  return (
    <ul>
      {filteredData.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          status={todo.status}
          onRemoveTodo={props.onRemoveTodo}
          //.bind(null, todo.id)
        ></Todo>
      ))}
    </ul>
  );
};

export default TodoList;
