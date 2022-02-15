import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import { allEmojisObject } from "../../assets/svgs/emojis";
import Reactions from "../common/Reactions";
import { LightTooltip } from "../common/ui/LightToolTip";
import AddReactionIcon from "../../assets/svgs/add_reaction_icon.svg";

const styles = makeStyles({
  emojiContainer: {
    borderRadius: "30px",
    textAlign: "center",
    cursor: "pointer",
    border: "1px solid lightslategrey",
    transition: "0.2s ease",
    "&:hover": {
      backgroundColor: "lightslategrey",
    },
  },
  emoji: {
    width: "24px",
  },
  addReactionTooltipContainer: {
    borderRadius: "30px",
    textAlign: "center",
    cursor: "pointer",
    border: "1px solid lightslategrey",
  },
  addReactionTooltipContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const ReactionsSection = ({ reactions }) => {
  const classes = styles();

  return (
    <Grid item container xs={9} columnGap={1}>
      {reactions.map((reactionData, index) => (
        <Tooltip title={reactionData.name} key={index}>
          <Grid item xs={1} className={classes.emojiContainer}>
            <img
              className={classes.emoji}
              src={allEmojisObject[reactionData.reaction]}
              alt=""
            />
          </Grid>
        </Tooltip>
      ))}

      <Grid item xs={1} className={classes.addReactionTooltipContainer}>
        <LightTooltip title={<Reactions />}>
          <div className={classes.addReactionTooltipContent}>
            <img className={classes.emoji} src={AddReactionIcon} alt="" />
          </div>
        </LightTooltip>
      </Grid>
    </Grid>
  );
};

export default ReactionsSection;
