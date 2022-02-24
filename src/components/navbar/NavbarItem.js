import React from "react";
import { makeStyles } from "@mui/styles";
import classnames from "classnames";
import ContainerButton from "../common/ui/ContainerButton";

const styles = makeStyles({
  rounded: {
    borderRadius: "50%",
    maxWidth: "40px",
    objectFit: "cover",
    boxShadow: "0px 0px 1px 0px lightslategrey",
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
