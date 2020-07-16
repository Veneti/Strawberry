import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Card, CardActions, CardContent, Divider, Button, Box, Grid, TextField, Typography } from '@material-ui/core';
import { Container} from '@material-ui/core'
import one from '../images/1.jpg'
import two from '../images/2.jpg'
import three from '../images/3.jpg'
import '../App.css';

const styles = (theme) => ({
    container: {
        width: "70%",
        height: "100vh",
    },
    text: {
        fontSize: '20px'
    },
    image: {
		width: '80%',
		borderRadius: '50%'
	}
});

class agents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      zip: '',
      ageRange: ''
    }
  }

  render() {
        const { classes } = this.props;
		return (
			<div>
                <Container className={classes.container}>
				<h1 className="header" style={{fontSize:"75px", textAlign: "center",color:"#f01716", "text-shadow" : "0px 4px 4px rgba(0, 0, 0, 0.25)"
}}>find a state farm agent near 75082</h1>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Grid container
					spacing={5}
					height="100%"
					width="100%"
					alignItems="stretch"
					justify="space-evenly"
					>
                            <Grid className={classes.gridItem} item xs="6" sm="3">
								<Card variant="outlined">
									<CardContent align="center">
                                        <a href="https://www.statefarm.com/agent/us/tx/richardson/kay-patel-1yjkd3bp000">
										<img className={classes.image} src={one} />
                                        </a>
										<h6 className={classes.text}>Kay Patel</h6>
										<h6>4251 E Renner Road<br/>
                                        Ste 110.<br/>
                                        Richardson, TX 75082-2753 </h6>
									</CardContent>
								</Card>
							</Grid>
                            <Grid className={classes.gridItem} item xs="6" sm="3">
								<Card className={classes.card} className="movingItem" variant="outlined">
									<CardContent align="center">
                                        <a href="https://www.daleinsure.com/?cmpid=cr44_blm_0001">
										<img className={classes.image} src={two} className={classes.image} />
										</a>
                                        <br/>
										<h6 className={classes.text}>Dale Johnson</h6>
										<h6 >800 E Campbell Road<br/>
                                            Suite 203<br/>
                                            Richardson, TX 75081-1862</h6>
									</CardContent>
								</Card>
							</Grid>
                            <Grid className={classes.gridItem} item xs="6" sm="3">
								<Card className={classes.card} variant="outlined">
									<CardContent align="center">
                                        <a href="https://www.statefarm.com/agent/US/TX/Richardson/Stephanie-South-4FRLR36R000">
										<img src={three} className={classes.image} />
                                        </a>
										<h6 className={classes.text}>Stephanie South</h6>
										<h6>189 N Plano Rd<br/>
                                        Suite 110<br/>
                                        Richardson, TX 75081-5459</h6>
									</CardContent>
								</Card>
							</Grid>
                        </Grid>
                </Container>
            </div>
		);
	}
}

export default withStyles(styles)(agents);
