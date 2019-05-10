import React, { Component } from "react";
//import MuiClass from "./components/MuiClass";
import theme from "./theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
//CssBaseline is MUI's version of normalize.css
import CssBaseline from "@material-ui/core/CssBaseline";
//import genKeys from "./components/genKeys";
import Home from "./components/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.theme = theme();
  }
  render() {
    return (
      <MuiThemeProvider theme={this.theme}>
        <CssBaseline />
        <div>
          <h1>App.js</h1>
          <Home />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
