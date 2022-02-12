import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import { allEmojisObject, randomEmoji } from "../../assets/svgs/emojis";
import Reactions from "../common/Reactions";
import { LightTooltip } from "../common/ui/LightToolTip";

const styles = makeStyles({
  emojiContainer: {
    borderRadius: "30px",
    textAlign: "center",
    cursor: "pointer",
    border: "1px solid lightslategrey",
    transition: "0.3s ease",
    "&:hover": {
      backgroundColor: "lightslategrey",
    },
  },
  emoji: {
    width: "24px",
  },
  addReactionTooltipContainer: {
    backgroundColor: "#778899b3",
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
        <Grid item xs={1} key={index} className={classes.emojiContainer}>
          <Tooltip title={reactionData.name}>
            <img
              className={classes.emoji}
              src={allEmojisObject[reactionData.reaction]}
              alt=""
            />
          </Tooltip>
        </Grid>
      ))}

      <Grid item xs={1} className={classes.addReactionTooltipContainer}>
        <LightTooltip title={<Reactions />}>
          <div className={classes.addReactionTooltipContent}>
            <span style={{ color: "white" }}>+</span>
            <img className={classes.emoji} src={randomEmoji()} alt="" />
          </div>
        </LightTooltip>
      </Grid>
    </Grid>
  );
};

export default ReactionsSection;
