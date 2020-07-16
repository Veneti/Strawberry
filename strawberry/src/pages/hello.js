import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import "../App.css";

const styles = (theme) => ({
	example: {
		color: "#E22925",
		//text-align -> textAlign
		textAlign: "center",
		justifyContent: "center",
		position: "relative",
		top: "50%",
	},
	header: {
		textAlign: "left", // <-- the magic
		fontWeight: "bold",
		fontSize: 150,
		marginTop: 125,
    marginLeft: 250,
		color: "red",
	},
	container: {
		color: "red",
		textAlign: "left",
		fontWeight: "normal",
		paddingLeft: 250,
		paddingRight: 580,
		paddingTop: 50,
		fontSize: 50,
    textShadow: "none",
	},
});

class hello extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className="hello-overall">
				<header className="welcome-header">
						<header className={classes.header}>Hello!</header>
					<div className={classes.container}>
						<div class="-oneX-widget">
							<label for="conv-textfield" class="-oneX-textfield__label" style={{"font-family": 'Josefin Sans'}} >
								zip code location
							</label>
							<input
								id="customMasked"
								type="text"
								class="-oneX-textfield--floating-input"
							/>
						</div>
					</div>
					<div className={classes.container}>
						<div class="-oneX-widget">
							<label for="conv-textfield" class="-oneX-textfield__label"  style={{"font-family": 'Josefin Sans'}} >
								What is your age?
							</label>
							<label for="name" class="-oneX-dropdown__floatingLabel"  style={{"font-family": 'Josefin Sans'}} >
								Age range
							</label>
							<select id="name" type="text" class="-oneX-dropdown"  style={{"font-family": 'Josefin Sans'}} >
								<option value=""></option>
								<option value="option1">15-18</option>
								<option value="option2">18-21</option>
								<option value="option3">21-24</option>
								<option value="option4">24-27</option>
								<option value="option5">27-30</option>
								<option value="option6">30-33</option>
								<option value="option7">33-36</option>
								<option value="option8">36+</option>
							</select>
						</div>
					</div>

					<div className={classes.container} style={{ align: "right" }}>
						<a href="/questions">
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
				</header>
			</div>
		);
	}
}
export default withStyles(styles)(hello);
