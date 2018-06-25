import * as React from "react";
import * as classNames from "classnames";
import { Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 240;

const styles = (theme: Theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  }
});

interface HeaderProps {
  open: boolean;
  handleDrawerOpen: () => void;
}

const Header = ({
  classes,
  ...props
}: HeaderProps & WithStyles<keyof ReturnType<typeof styles>>) => (
  <AppBar
    position="absolute"
    className={classNames(classes.appBar, props.open && classes.appBarShift)}
  >
    <Toolbar disableGutters={!props.open}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={props.handleDrawerOpen}
        className={classNames(classes.menuButton, props.open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="title" color="inherit" noWrap>
        Mini variant drawer
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)<HeaderProps>(Header);
