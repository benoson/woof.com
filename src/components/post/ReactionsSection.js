import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";
import AddReactionIcon from "../../assets/svgs/add_reaction_icon.svg";
import { allEmojisObject } from "../../assets/svgs/emojis";
import { userSelector } from "../../redux/selectors";
import Reactions from "../common/Reactions";
import { LightTooltip } from "../common/ui/LightToolTip";

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
  emojiSelectedContainer: {
    backgroundColor: "lightslategrey",
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
  reactionTooltip: {
    marginBottom: "10px",
  },
});

const ReactionsSection = ({ reactions, onReactionClick }) => {
  const classes = styles();
  const userFromState = useSelector(userSelector);

  const emojiContainerStyle = classNames({
    [classes.emojiContainer]: true,
  });

  const emojiSelectedContainerStyle = classNames({
    [classes.emojiContainer]: true,
    [classes.emojiSelectedContainer]: true,
  });

  const onExistingReactionClick = (isAlreadyReacted, reaction) => {
    onReactionClick(reaction);
  };

  return (
    <Grid item container xs={9} gap={1}>
      {reactions.map((reactionData, index) => (
        <Tooltip title={reactionData.name} key={index}>
          <Grid
            item
            xs={1.2}
            className={reactionData.name === userFromState.userName ? emojiSelectedContainerStyle : emojiContainerStyle}
            onClick={() => {
              onExistingReactionClick(reactionData.name === userFromState.userName, reactionData.reaction);
            }}
          >
            <img className={classes.emoji} src={allEmojisObject[reactionData.reaction]} alt="" />
          </Grid>
        </Tooltip>
      ))}

      <Grid item xs={1.2} className={classes.addReactionTooltipContainer}>
        <LightTooltip title={<Reactions setReaction={onReactionClick} />}>
          <div className={classes.addReactionTooltipContent}>
            <img className={classes.emoji} src={AddReactionIcon} alt="" />
          </div>
        </LightTooltip>
      </Grid>
    </Grid>
  );
};

export default ReactionsSection;
