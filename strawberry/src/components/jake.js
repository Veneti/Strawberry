import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import jakeImage from '../images/jake.png'

const styles = (theme) => ({

});
var style = {
    textAlign: "right",
    padding: "20px",
    position: "fixed",
    right: "0",
    bottom: "0",
    height: "250px",
    width: "20%",
}

class jake extends Component {
    render() {
		const { classes } = this.props;
		return (
			
			<div>
				<div>
					<div style={style}>
						<img src={jakeImage} className={classes.jakeStyle}/>
					</div>
				</div>
            </div>
		);
	}
}
export default withStyles(styles)(jake);