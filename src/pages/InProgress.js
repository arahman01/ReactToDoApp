import { Container } from "@mui/system";
import TodoList from "../components/TodoList";
import { useDispatch } from "react-redux";

const InProgress = (props) => {
  const dispatch = useDispatch();

  const removeTodoHandler = (todoId) => {
    dispatch({ type: "remove", payload: todoId });
  };

  return (
    <div>
      <Container>
        <h2 className="headings">Todos In Progress</h2>
        <TodoList
          data={props.data}
          onRemoveTodo={removeTodoHandler}
          statusRequirement="in-progress"
        ></TodoList>
      </Container>
    </div>
  );
};

export default InProgress;
