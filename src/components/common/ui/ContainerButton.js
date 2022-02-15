import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";

const styles = makeStyles({
  containerButton: {
    borderRadius: "5px",
    padding: "3px",
    height: "42px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      height: "100%",
    },
  },
});

const ContainerButton = ({ children, ...props }) => {
  const classes = styles();

  return (
    <Button className={classes.containerButton} {...props}>
      {children}
    </Button>
  );
};

export default ContainerButton;
