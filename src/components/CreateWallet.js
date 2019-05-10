import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
//**DON'T FORGET TO INSTALL ICONS PACKAGE**//
//https://www.npmjs.com/package/@material-ui/icons
//**DON'T FORGET TO INSTALL ICONS PACKAGE**//
import HighliteOff from "@material-ui/icons/HighlightOff";

const styles = theme => ({
	paper: {
		width: 400,
		backgroundColor: "white",
		padding: 20,
		//Removes ugly blue shadow
		outline: "none"
	}
});

class CreateWallet extends Component {
	state = {
		open: false
	};

	componentWillReceiveProps(nextProps) {
		//prevents an unneeded render
		if (nextProps.open !== this.state.open) {
			this.setState({ open: nextProps.open });
		}
	}

	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes } = this.props;

		return (
			<div>
				<Button onClick={this.handleOpen}>Create Wallet</Button>
				<Modal
					//aria-labelledby="simple-modal-title"
					//aria-describedby="simple-modal-description"
					open={this.state.open}
					onClose={this.handleClose}
					//onBackdropClick={this.handleClose}
				>
					<div className={classes.paper}>
						<HighliteOff onClick={this.handleClose} />
						<h1>Modal Title</h1>
						Wallet Name:
						<input
							type="text"
							name="receivingAddress"
							size="48"
							onChange={this.handleInputChange}
						/>
						<br />
						Wallet Password:
						<input
							type="text"
							name="receivingAddress"
							size="48"
							onChange={this.handleInputChange}
						/>
						<p>
							this is modal body,this is modal body,this is modal
							body,this is modal body this is modal body, this is
							modal body, this is modal body
						</p>
					</div>
				</Modal>
			</div>
		);
	}
}

export default withStyles(styles)(CreateWallet);

// import React, { Component } from "react";
// import { withStyles } from "@material-ui/core/styles";
// //import { stuff, stuff } from "@material-ui/core";
// import Typography from "@material-ui/core/Typography";

// const styles = theme => ({});

// class CreateWallet extends Component {
// 	//constructor(props) {
// 	//	super(props);
// 	//	this.state = {
// 	//  	hello: true,
// 	//	};
// 	//}
// 	handleCreateWallet(event) {
// 		console.log("hit wallet button");
// 	}

// 	render() {
// 		const { classes } = this.props;
// 		return (
// 			<div>
// 				<button onClick={this.handleCreateWallet}>Create Wallet</button>
// 			</div>
// 		);
// 	}
// }

// export default withStyles(styles)(CreateWallet);
