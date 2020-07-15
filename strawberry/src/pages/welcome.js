import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import "../App.css";

const styles = (theme) => ({
	example: {
		color: "blue",
		//text-align -> textAlign
		textAlign: "center",
	},
});
class welcome extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
        {/* <h1 className={classes.example}>Hello!</h1> */}
				<h1 class="rainbow-text">Welcome!</h1>
			</div>
		);
	}
}
export default withStyles(styles)(welcome);
