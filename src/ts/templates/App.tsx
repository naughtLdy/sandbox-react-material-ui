import * as React from "react";
import { Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import Header from "../organisms/Header";
import Panel from "../molecules/Panel";

const drawerWidth = 240;

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden" as "hidden",
    position: "relative" as "relative",
    display: "flex"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  "content-left": {
    marginLeft: -1 * drawerWidth
  },
  "content-right": {
    marginRight: -1 * drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "contentShift-left": {
    marginLeft: 0
  },
  "contentShift-right": {
    marginRight: 0
  }
});

interface AppProps {}

interface AppState {
  open: boolean;
  anchor: string;
}

class App extends React.Component<
  AppProps & WithStyles<keyof ReturnType<typeof styles>>,
  AppState
> {
  private classes: any;

  constructor(props: AppProps & WithStyles<keyof ReturnType<typeof styles>>) {
    super(props);

    this.classes = props.classes;

    this.state = {
      open: false,
      anchor: "left"
    };
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className={this.classes.root}>
        <Header
          open={this.state.open}
          handleDrawerOpen={this.handleDrawerOpen}
          handleDrawerClose={this.handleDrawerClose}
        />
        <main className={this.classes.content}>
          <div className={this.classes.drawerHeader} />
          <Panel />
        </main>
      </div>
    );
  }
}

export default withStyles(styles)<AppProps>(App);
