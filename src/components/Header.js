import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

export default function Header() {
return (
	<AppBar position="static">
		<Toolbar>
		<Typography variant="h6"
			component="div" sx={{ flexGrow: 1 }}>
			To Do App
		</Typography>
		<Box sx={{width: 450, display: 'flex', justifyContent: 'space-evenly'}}>
		<Button component={Link} to="/backlog" variant="contained" color="primary">Backlog</Button>
		<Button component={Link} to="/in-progress" variant="contained" color="primary">In Progress</Button>
		<Button component={Link} to="/completed" variant="contained" color="primary">Completed</Button>
		</Box>
		</Toolbar>
	</AppBar>
);
}