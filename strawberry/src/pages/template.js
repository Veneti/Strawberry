import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import '../App.css';

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
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      zip: '',
      ageRange: ''
    }
  }

  render() {
		return (
			<div>
				<h1 className="general-heading">Hello!</h1>
        <div>
        </div>
      </div>
		);
	}
}

export default withStyles(styles)(template);
