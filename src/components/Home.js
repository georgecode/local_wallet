import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
//import { stuff, stuff } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import genKeys from "./genKeys";
import Web3 from "web3";
import CreateWallet from "./CreateWallet";
import infuraKey from "./apiKeys/infuraKey.js";

const styles = theme => ({
	example: {
		color: "red"
	},
	themeExample: {
		color: theme.palette.secondary.main
	}
});

//Specifies which network you want to use ie. testnet mainnet ect...
const web3 = new Web3(
	new Web3.providers.HttpProvider(
		//*** DON'T FORGET to change this to the infura endpoint you created below***//
		`https://kovan.infura.io/v3/${infuraKey()}`
		//*** DON'T FORGET to change this to the infura endpoint you created ***//
	)
);

class Home extends Component {
	//constructor(props) {
	//	super(props);
	//	this.state = {
	//  	hello: true,
	//	};
	//}

	render() {
		console.log(genKeys(web3));
		console.log("infuraKey", infuraKey());
		const { classes } = this.props;
		return (
			<div>
				<Typography variant="h2" className={classes.example}>
					Home
				</Typography>
				<Typography className={classes.themeExample}>Home</Typography>
				<CreateWallet />
			</div>
		);
	}
}

export default withStyles(styles)(Home);
