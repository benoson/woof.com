import { Divider, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import ContainerButton from "../components/common/ui/ContainerButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import Pepe from "../assets/images/pepe.jpg";
import NyanCat from "../assets/images/nyan_cat.jpeg";

const styles = makeStyles({
  container: {
    padding: "20px 0px",
    margin: "20px 0px",
  },
  innerContainer: {
    backgroundColor: "#212f45",
    padding: "20px",
    borderRadius: "10px",
  },
  listItem: {
    padding: "20px 0",
  },
  divider: {
    backgroundColor: "white",
  },
});

const customAppColors = [
  "#005f73",
  "#2a9d8f",
  "#3d405b",
  "#03045e",
  "#90dbf4",
  "#fca311",
  "#7400b8",
  "#80ffdb",
  "#3c096c",
  "#e0aaff",
];

const customButtonImages = [Pepe, NyanCat];

const SelectBackgroundOptions = (onBackgroundChange) => {
  return (
    <Grid item container spacing={1}>
      <Grid item container spacing={1}>
        {customAppColors.map((color) => (
          <Grid item key={color}>
            <ContainerButton
              style={{ backgroundColor: color }}
              onClick={() => {
                onBackgroundChange(color);
              }}
            />
          </Grid>
        ))}
      </Grid>

      <Grid item container spacing={1}>
        {customButtonImages.map((img) => (
          <Grid item key={img}>
            <ContainerButton>
              <img alt="" src={img} />
            </ContainerButton>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

const Preferences = () => {
  const classes = styles();
  const [exampleBackground, setExampleBackground] = useState("white");

  const preferences = [
    {
      title: "Background",
      description: "Change the background of all pages",
      additionalElements: () => {
        return (
          <SelectBackgroundOptions
            onBackgroundChange={(color) => {
              setExampleBackground(color);
            }}
          />
        );
      },
      onClick: () => {},
    },

    {
      title: "Buttons",
      description: "Change background of all the buttons",
      additionalElements: () => {
        return (
          <Grid item container>
            <Grid item>
              <SelectBackgroundOptions
                onBackgroundChange={(color) => {
                  setExampleBackground(color);
                }}
              />
            </Grid>

            <Grid item>
              <ContainerButton style={{ backgroundColor: exampleBackground }} />
            </Grid>
          </Grid>
        );
      },
      onClick: () => {},
    },
  ];

  return (
    <Grid container item justifyContent="center" className={classes.container}>
      <Grid
        container
        item
        xs={6}
        rowSpacing={2}
        className={classes.innerContainer}
      >
        <List>
          {preferences.map((preference, index) => (
            <>
              <ListItem className={classes.listItem} key={preference}>
                <Grid container item xs={12}>
                  <Grid item xs={8}>
                    <Typography color="white" fontSize="24px" align="left">
                      {preference.title}
                    </Typography>

                    <Typography color="white" fontSize="18px" align="left">
                      {preference.description}
                    </Typography>
                  </Grid>

                  <Grid item xs={4}>
                    {preference.additionalElements()}
                  </Grid>
                </Grid>
              </ListItem>

              {index !== preferences.length - 1 && (
                <Divider className={classes.divider} />
              )}
            </>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Preferences;
