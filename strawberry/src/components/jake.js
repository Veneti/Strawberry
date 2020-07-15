import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import jake from '../images/jake.png'

const styles = (theme) => ({
	example: {
		color: 'red',
		//text-align -> textAlign
		textAlign: 'center'
	},
	jakediv: {
		height: '100%'
	},
	jake: {
		align: 'right',
		verticalAlign: 'bottom',
		width: '20%'
	}
});
var style = {
    textAlign: "right",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "200px",
    width: "90%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '200px',
  width: '90%',
}
class jake extends Component {
    render() {
		const { classes } = this.props;
		return (
			
			<div>
				<h1 className={classes.example}>Hello!</h1>
				<a href="/strawberry">Link to strawberry</a>
				<div class="-oneX-row -oneX-col-6">
					<button type="submit" class="-oneX-btn-primary">Submit</button>
				</div>
				<div>
					<div style={phantom} />
					<div style={style}>
						<img src={jake} className={classes.jake}/>
					</div>
				</div>
            </div>
		);
	}
}
export default withStyles(styles)(jake);