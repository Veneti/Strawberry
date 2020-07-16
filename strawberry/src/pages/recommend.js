/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import "../style.scss";
import "../App.css";
import car from "../images/car.png";
import strawberry from "../images/strawberry-logo.png";
import { withTheme } from "@material-ui/core";

const styles = (theme) => ({
	header: {
		textAlign: "center", // <-- the magic
		fontWeight: "bold",
		fontSize: 15,
		marginTop: 10,
		paddingTop: 80,
		color: "white",
	},
	format: {
		textAlign: "center",
	},
});
class recommend extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.format}>
				<div class="page">
					<h1 className={classes.header}>
						<h1 class="animated-text">Recommended Coverages!</h1>
					</h1>

					<div class="content">
						<div class="circle">
							<a href="/autopage">
								{" "}
								{/*DO NOT DELETE THIS LINK*/}
								<div class="circle_title">
									<h2>Auto Insurance</h2>
									<h3>Buckle Up With Car Insurance by State Farm®</h3>
								</div>
							</a>

							<div class="circle_inner">
								<div class="circle_inner__layer">
									<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc1.png" />
								</div>
								<div class="circle_inner__layer">
									<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc2.png" />
									{/* <img src={car} /> */}
								</div>
								<div class="circle_inner__layer">
									<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc3.png" />
								</div>
							</div>
							<div class="content_shadow"></div>
						</div>
					</div>
					<div class="content">
						<div class="circle">
							<div class="circle_title">
								<h2>Renters Insurance</h2>
								<h3>
									Protect your personal property with low-cost insurance
									coverage.
								</h3>
							</div>
							<div class="circle_inner">
								<div class="circle_inner__layer">
									<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc4.png" />
								</div>
								<div class="circle_inner__layer">
									<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc5.png" />
								</div>
								<div class="circle_inner__layer">
									<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc6.png" />
								</div>
							</div>
							<div class="content_shadow"></div>
						</div>
					</div>
					<div class="content">
						<div class="circle">
							<div class="circle_title">
								<h2>Life Insurance</h2>
								<h3>State Farm can help you find coverage that's right for you and your loved ones.</h3>
							</div>
							<div class="circle_inner">
								<div class="circle_inner__layer">
									<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc7.png" />
								</div>
								<div class="circle_inner__layer">
									<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc8.png" />
								</div>
								<div class="circle_inner__layer">
									<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc9.png" />
								</div>
							</div>
							<div class="content_shadow"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default withStyles(styles)(recommend);
