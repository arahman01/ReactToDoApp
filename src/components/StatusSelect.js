import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useDispatch } from "react-redux";

export default function StatusSelect(props) {
  const dispatch = useDispatch();
  const [status, setStatus] = React.useState(props.status);

  const handleChange = (event) => {
    setStatus(event.target.value);
    console.log(event.target.value);
    console.log(status);
    dispatch({ type: "update", payload: event.target.value, id: props.id });
  };

  return (
    <FormControl sx={{ width: 150 }} size="small">
      <InputLabel id="demo-simple-select-label">Status</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={status}
        label="Status"
        onChange={handleChange}
      >
        <MenuItem value={"backlog"}>Backlog</MenuItem>
        <MenuItem value={"in-progress"}>In Progress</MenuItem>
        <MenuItem value={"completed"}>Completed</MenuItem>
      </Select>
    </FormControl>
  );
}
