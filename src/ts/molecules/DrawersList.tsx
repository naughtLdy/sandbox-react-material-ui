import * as React from "react";
import { Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Chat from "@material-ui/icons/Chat";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

const styles = (theme: Theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

interface DrawersListProps {}

const DrawersList = ({
  classes,
  ...props
}: DrawersListProps & WithStyles<keyof ReturnType<typeof styles>>) => (
  <div className={classes.root}>
    <List component="nav">
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Chat />
        </ListItemIcon>
        <ListItemText primary="chat" />
      </ListItem>
    </List>
  </div>
);

export default withStyles(styles)(DrawersList);
