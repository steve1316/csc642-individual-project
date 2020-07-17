import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: "100vw",
		maxWidth: "100vw",
		marginTop: -10,
		marginLeft: -10
	},
	title: {
		flexGrow: 1
	}
}));

function Header(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						{props.title}
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
export default Header;
