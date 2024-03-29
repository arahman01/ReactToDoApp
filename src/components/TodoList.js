import NoContentText from "./NoContentText";
import Todo from "./Todo";
import "../ProjectStyles.css";

const TodoList = (props) => {
  const filteredData = props.data.filter(
    (todo) => todo.status === props.statusRequirement
  );
  return (
    <>
      {Array.isArray(filteredData) && filteredData.length === 0 && (
        <NoContentText></NoContentText>
      )}
      <ul className="listStyles">
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
    </>
  );
};

export default TodoList;
