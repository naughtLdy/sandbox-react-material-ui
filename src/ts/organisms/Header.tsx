import * as React from "react";
import Drawers from "../molecules/Drawers";
import Header from "../molecules/Header";

interface AppProps {
  open: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
}

interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header
          open={this.props.open}
          handleDrawerOpen={this.props.handleDrawerOpen}
        />
        <Drawers
          open={this.props.open}
          handleDrawerClose={this.props.handleDrawerClose}
        />
      </div>
    );
  }
}
