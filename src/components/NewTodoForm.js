import { TextField, Button } from "@mui/material";
import React, { useRef } from "react";
import { Box } from "@mui/system";

const NewTodoForm = (props) => {
  const todoInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTodo = todoInputRef.current.value;

    const todoData = {
      id: Math.random().toString(),
      text: enteredTodo,
      status: "backlog", // backlog is the default option
    };

    todoInputRef.current.value = "";
    props.onAddTodo(todoData);
  };

  return (
    <Box>
      <h3>Add a Todo</h3>
      <TextField
        multiline={true}
        rows={2}
        fullWidth
        id="outlined-basic"
        label="Enter New Todo"
        variant="outlined"
        inputRef={todoInputRef}
        required
        sx={{ color: "primary.main", borderRadius: 1 }}
      />
      <Button onClick={submitHandler} disabled={true} variant="outlined" sx={{mt: 0.5}}>
        Add
      </Button>
    </Box>
  );
};

export default NewTodoForm;
