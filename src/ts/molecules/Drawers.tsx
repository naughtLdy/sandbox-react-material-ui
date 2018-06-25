import * as React from "react";
import * as classNames from "classnames";
import { Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DrawersList from "./DrawersList";

const drawerWidth = 240;

const styles = (theme: Theme) => ({
  drawerPaper: {
    position: "relative" as "relative",
    whiteSpace: "nowrap" as "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden" as "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
});

interface DrawersProps {
  open: boolean;
  handleDrawerClose: () => void;
}

const Drawers = ({
  classes,
  ...props
}: DrawersProps & WithStyles<keyof ReturnType<typeof styles>>) => (
  <Drawer
    variant="permanent"
    classes={{
      paper: classNames(
        classes.drawerPaper,
        !props.open && classes.drawerPaperClose
      )
    }}
    open={!props.open}
  >
    <div className={classes.toolbar}>
      <IconButton onClick={props.handleDrawerClose}>
        {!props.open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </div>
    <Divider />
    <DrawersList />
  </Drawer>
);

export default withStyles(styles)<DrawersProps>(Drawers);
