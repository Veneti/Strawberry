import React, { Component } from "react";
import Strawberry from "../images/strawberry-logo.png";
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
		return (
			<div>
				<header class="welcome-header">
					<img src={Strawberry} alt="logo" style={{ "padding-top": "40px" }} />
					<h1 class="rainbow-text">Welcome to Strawberry</h1>
          <h3 class="welcome-description">a bite-size intro to insurance</h3>
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
				</header>
			</div>
		);
	}
}
export default withStyles(styles)(welcome);
