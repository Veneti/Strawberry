import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import "../App.css";

const styles = (theme) => ({
	header: {
        color: '#E11313',
        fontSize: '75px', 
        lineHeight: '100px',
        // fontFamily: "Josefin Sans", 
        textAlign: 'center', 
        position: 'absolute', 
        width: '1000px',
        height:'322px', 
        left: '260px',
        top: '100px'
    }
});

class explanation extends Component {
    render() {
		const { classes } = this.props;
		return (
			
			<div>
				<h1 className={classes.header}>We're going to ask you a few questions to gauge your needs.</h1>
            </div>
		);
	}
}
export default withStyles(styles)(explanation);