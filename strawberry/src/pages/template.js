import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
	example: {
		color: 'red',
		//text-align -> textAlign
		textAlign: 'center',
		justifyContent: 'center',
  		position: 'relative',
  		top: '50%',
	}
});
class template extends Component {
    render() {
		const { classes } = this.props;
		return (
			
			<div>
				<h1 className={classes.example}>Hello!</h1>
				<a href="/strawberry">Link to strawberry</a>
				<div class="-oneX-row -oneX-col-6">
					<button type="submit" class="-oneX-btn-primary">Submit</button>
				</div>
            </div>
		);
	}
}
export default withStyles(styles)(template);