import { Container } from "@mui/system";
import TodoList from "../components/TodoList";
import { useDispatch } from "react-redux";

const Completed = (props) => {
  const dispatch = useDispatch();

  const removeTodoHandler = (todoId) => {
    dispatch({ type: "remove", payload: todoId });
  };

  return (
    <div>
      <Container>
        <h2 className="headings">Todos Completed</h2>
        <TodoList
          data={props.data}
          onRemoveTodo={removeTodoHandler}
          statusRequirement="completed"
        ></TodoList>
      </Container>
    </div>
  );
};

export default Completed;
