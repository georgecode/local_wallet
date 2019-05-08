import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
//import { stuff, stuff } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
	example:{
		color:"red"
	},
	themeExample:{
		color: theme.palette.secondary.main
	}
});

class MuiClass extends Component {
	//constructor(props) {
	//	super(props);
	//	this.state = {
    //  	hello: true,
    //	};
	//}

	render() {
		const { classes } = this.props
		return(
			<div>
				<Typography variant="h2" className={classes.example}>example</Typography>
				<Typography className={classes.themeExample}>Mui Class template</Typography>
			</div>
			)
	}
}

export default withStyles(styles)(MuiClass);


