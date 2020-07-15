import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import '../App.css';

const styles = (theme) => ({
	example: {
		color: "blue",
		//text-align -> textAlign
		textAlign: "center",
	},
});
class welcome extends Component {
	render() {

		return (
			<h1 class="rainbow-text">Welcome to Strawberry!</h1>
		);
	}
}
export default withStyles(styles)(welcome);
