import * as React from "react";
import { Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = (theme: Theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

interface PanelProps {}

const Panel = ({
  classes,
  ...props
}: PanelProps & WithStyles<keyof ReturnType<typeof styles>>) => (
  <Typography>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>Expansion Panel 1</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>Expansion Panel 2</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel disabled>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>
          Disabled Expansion Panel
        </Typography>
      </ExpansionPanelSummary>
    </ExpansionPanel>
  </Typography>
);

export default withStyles(styles)<PanelProps>(Panel);
