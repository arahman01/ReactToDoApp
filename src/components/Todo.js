import React from "react";
import { Grid, Box, Button } from "@mui/material";
import StatusSelect from "./StatusSelect";
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = (props) => {
  return (
    <Grid
      container
      sx={{
        border: 1,
        borderRadius: 4,
        m: 2,
        pl: 2,
        width: "fix",
        maxHeight: 200,
        borderColor: "primary.main",
        justifyContent: "space-between",
      }}
    >
      <h2>{props.text}</h2>
      <Box sx={{ pt: 1, width: 250, m: 1 }}>
        <StatusSelect status={props.status} id={props.id} />
        <Button
          onClick={()=>{props.onRemoveTodo(props.id)}}
          sx={{
            ml: 2,
            border: 1,
            width: 25,
            height: 50,
            bgcolor: "error.main",
            color: "text.secondary",
          }}
        >
          <DeleteIcon />
        </Button>
      </Box>
    </Grid>
  );
};

export default Todo;
