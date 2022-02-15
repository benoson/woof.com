import React from "react";
import { makeStyles } from "@mui/styles";
import classnames from "classnames";
import ContainerButton from "../common/ui/ContainerButton";

const styles = makeStyles({
  rounded: {
    borderRadius: "50%",
  },
});

const NavbarItem = ({ img, rounded, ...props }) => {
  const classes = styles();
  const styledImage = classnames({
    [classes.rounded]: rounded,
  });

  return (
    <ContainerButton fullWidth {...props}>
      <img alt="" src={img} className={styledImage} />
    </ContainerButton>
  );
};

export default NavbarItem;
