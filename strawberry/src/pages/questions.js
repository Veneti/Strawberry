import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Grid, Container} from '@material-ui/core'
import Jake from '../components/jake'
import SpeechBubble1 from '../images/bubble1.png'
import './questionStyles.css';
var speech = {
    padding: "20px",
    position: "fixed",
    right: "250px",
    bottom: "100px",
    width: "15%",
  }
const styles = (theme) => ({
    container: {
        width: "70%",
        height: "100vh",
    },
    container2: {
        width: "80%"
	},
	cornerImage: {
		right: "50px",
		bottom: "100px",
		width: "250px",
		align: "right"
	}
});
class questions extends Component {
    render() {
		const { classes } = this.props;
		return (
			<div>
				<Container className={classes.container}>
                        <h1 className="header" style={{fontSize:"100px", color:"#f01716"}}>we're going to ask you a few questions to gauge your needs</h1>
							<div>
								<img src = {SpeechBubble1} style={speech} className={classes.cornerImage}/>
							</div>
               	</Container>
                <Container className={classes.container}>
                        <h1 className="header" style={{fontSize:"100px", color:"#f01716"}}>do you own a car?</h1>
                        <div className="dropdown">
                            <select id="name" type="text" class="-oneX-dropdown">
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
							<div>
								<img src = {SpeechBubble1} style={speech} className={classes.cornerImage}/>
							</div>
               	</Container>
				<Container className={classes.container}>
                        <h1 className="header" style={{fontSize:"100px", color:"#f01716"}}>do you have financial dependents?</h1>
                        <div className="dropdown">
                            <select id="name" type="text" class="-oneX-dropdown">
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
               	</Container>
				<Container className={classes.container}>
                        <h1 className="header" style={{fontSize:"100px", color:"#f01716"}}>are you living in a rented apartment, condo, or home?</h1>
                        <div className="dropdown">
                            <select id="name" type="text" class="-oneX-dropdown">
                                <option>Apartment</option>
                                <option>Condo</option>
								<option>Home</option>
                            </select>
                        </div>
               	</Container>
				<Container className={classes.container}>
                        <h1 className="header" style={{fontSize:"100px", color:"#f01716"}}>are your medical expenses currently covered?</h1>
                        <div className="dropdown">
                            <select id="name" type="text" class="-oneX-dropdown">
								<option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
               	</Container>
				<Container className={classes.container}>
					<h1 className="header" style={{fontSize:"100px", color:"#f01716"}}>get my insurance advice</h1>
					<div className="arrow">
					<a href="/recommend">
  					<svg
  						width="209"
  						height="82"
  						viewBox="0 0 209 82"
  						fill="none"
  						xmlns="http://www.w3.org/2000/svg"
  					>
  						<g filter="url(#filter0_d)">
  							<path
  								d="M203.536 40.5355C205.488 38.5829 205.488 35.4171 203.536 33.4645L171.716 1.64466C169.763 -0.30796 166.597 -0.30796 164.645 1.64466C162.692 3.59728 162.692 6.76311 164.645 8.71573L192.929 37L164.645 65.2843C162.692 67.2369 162.692 70.4027 164.645 72.3553C166.597 74.308 169.763 74.308 171.716 72.3553L203.536 40.5355ZM4 42L200 42L200 32L4 32L4 42Z"
  								fill="#E11313"
  							/>
  						</g>
  						<defs>
  							<filter
  								id="filter0_d"
  								x="0"
  								y="0.180176"
  								width="209"
  								height="81.6396"
  								filterUnits="userSpaceOnUse"
  								color-interpolation-filters="sRGB"
  							>
  								<feFlood flood-opacity="0" result="BackgroundImageFix" />
  								<feColorMatrix
  									in="SourceAlpha"
  									type="matrix"
  									values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  								/>
  								<feOffset dy="4" />
  								<feGaussianBlur stdDeviation="2" />
  								<feColorMatrix
  									type="matrix"
  									values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
  								/>
  								<feBlend
  									mode="normal"
  									in2="BackgroundImageFix"
  									result="effect1_dropShadow"
  								/>
  								<feBlend
  									mode="normal"
  									in="SourceGraphic"
  									in2="effect1_dropShadow"
  									result="shape"
  								/>
  							</filter>
  						</defs>
  					</svg>
          </a>

					</div>
               	</Container>
                <Jake/>
            </div>
		);
	}
}
export default withStyles(styles)(questions);