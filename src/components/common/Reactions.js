import React from "react";
import { makeStyles } from "@mui/styles";
import { allEmojisArray, allEmojisObject } from "../../assets/svgs/emojis";
import Grid from "@mui/material/Grid";

const styles = makeStyles({
  sectionContainer: {
    padding: "5px",
  },
  emojiContainer: {
    borderRadius: "30px",
    textAlign: "center",
    cursor: "pointer",
    border: "1px solid white",
    transition: "0.2s ease",
    "&:hover": {
      backgroundColor: "lightslategrey",
    },
  },
  emoji: {
    width: "24px",
  },
});

const Reactions = ({ setReaction }) => {
  const classes = styles();

  const onReactionClick = (emoji) => {
    const emojiName = Object.keys(allEmojisObject).find(
      (key) => allEmojisObject[key] === emoji
    );
    setReaction(emojiName);
  };

  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="space-between"
      gap={1}
      className={classes.sectionContainer}
    >
      {allEmojisArray.map((emoji, index) => (
        <Grid
          item
          xs={2}
          className={classes.emojiContainer}
          key={index}
          onClick={() => {
            onReactionClick(emoji);
          }}
        >
          <img className={classes.emoji} src={emoji} alt="" />
        </Grid>
      ))}
    </Grid>
  );
};

export default Reactions;
