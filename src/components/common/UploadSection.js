import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import ContainerButton from "../common/ui/ContainerButton";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import { useDispatch } from "react-redux";
import appActionTypes from "../../redux/actionTypes/appActionTypes";
import { ReactComponent as CircularCancelIcon } from "../../assets/svgs/circular_cancel_icon.svg";

const styles = makeStyles({
  container: {
    position: "fixed",
    height: "100vh",
    backgroundColor: "#00000094",
    zIndex: 999,
  },
  innerContainer: {
    height: "80%",
    backgroundColor: "white",
    boxShadow: "0px 0px 5px 3px #00000036",
    borderRadius: "5px",
    padding: "25px",
  },
  imageUploadedContainer: {
    textAlign: "center",
    position: "relative",
  },
  imageUploaded: {
    objectFit: "cover",
    width: "350px",
    height: "350px",
  },
  chip: {
    marginRight: "10px",
  },
  dropZone: {
    height: "150px",
  },
  removeImageButton: {
    position: "absolute",
    top: 0,
    right: 0,
  },
});

const UploadSection = () => {
  const classes = styles();
  const dispatch = useDispatch();

  const [loadedImage, setLoadedImage] = useState(null);
  const [tagsInputValue, setTagsInputValue] = useState("");
  const [tags, setTags] = useState([]);

  function onImageUpload(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = (e) => {
      setLoadedImage(reader.result);
    };
  }

  const onTagsInputChange = (event) => {
    setTagsInputValue(event.target.value);
  };

  const onTagsInputKeyDown = (event) => {
    if (event.which === 13) {
      const newTag = event.target.value.trim();
      setTags((currentTags) => [...currentTags, newTag]);
      setTagsInputValue("");
    }
  };

  const onCancelUpload = () => {
    dispatch({ type: appActionTypes.HIDE_UPLOAD_SECTION });
  };

  return (
    <Grid
      item
      container
      xs={12}
      justifyContent="center"
      alignItems="center"
      className={classes.container}
    >
      <Grid
        item
        container
        xs={6}
        rowGap={2}
        className={classes.innerContainer}
        alignItems="space-between"
      >
        <Grid container item>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              variant="standard"
              multiline
              rows={4}
              label="Describe the meme"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="outlined-basic1"
              variant="standard"
              label="Tags (separated by enter key)"
              fullWidth
              value={tagsInputValue}
              onChange={onTagsInputChange}
              onKeyDown={onTagsInputKeyDown}
            />
          </Grid>

          <Grid item container xs={12}>
            {tags.map((tag, index) => (
              <Grid item key={index}>
                <Chip
                  className={classes.chip}
                  label={tag}
                  onClick={"handleClick"}
                  onDelete={"handleDelete"}
                />
              </Grid>
            ))}
          </Grid>

          {loadedImage ? (
            <Grid item xs={12} className={classes.imageUploadedContainer}>
              <img src={loadedImage} className={classes.imageUploaded} alt="" />

              <ContainerButton
                component="label"
                onClick={onCancelUpload}
                className={classes.removeImageButton}
              >
                <CircularCancelIcon />
              </ContainerButton>
            </Grid>
          ) : (
            <Grid item xs={12}>
              <ContainerButton component="label" variant="outlined">
                Click here or drop an image
                <input type="file" hidden onChange={onImageUpload} />
              </ContainerButton>
            </Grid>
          )}
        </Grid>

        <Grid
          item
          container
          xs={12}
          justifyContent="flex-end"
          alignItems="flex-end"
          spacing={3}
        >
          <Grid item xs={2}>
            <ContainerButton
              component="label"
              variant="outlined"
              onClick={onCancelUpload}
            >
              Cancel
            </ContainerButton>
          </Grid>

          <Grid item xs={2}>
            <ContainerButton component="label" variant="outlined">
              Done
            </ContainerButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UploadSection;
