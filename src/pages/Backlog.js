import { Container, Box } from "@mui/material";
import { useDispatch } from "react-redux";

import TodoList from "../components/TodoList";
import NewTodoForm from "../components/NewTodoForm";

const Backlog = (props) => {
  const dispatch = useDispatch();
  //const DATA = useSelector((state) => state.todos); //get data from store

  const addTodoHandler = (todo) => {
    // todo is an object of todo that comes from the todo form
    dispatch({ type: "add", payload: todo });
  };

  const removeTodoHandler = (todoId) => {
    dispatch({ type: "remove", payload: todoId });
  };

  return (
    <Box>
      <Container maxWidth="sm">
        <NewTodoForm onAddTodo={addTodoHandler} />
      </Container>
      <Container>
        <h2 className="headings">Todo Backlog</h2>
        <TodoList
          data={props.data}
          onRemoveTodo={removeTodoHandler}
          statusRequirement="backlog"
        ></TodoList>
      </Container>
    </Box>
  );
};

export default Backlog;
