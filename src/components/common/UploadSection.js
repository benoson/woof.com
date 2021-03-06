import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import ContainerButton from "../common/ui/ContainerButton";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import { useDispatch } from "react-redux";
import appActionTypes from "../../redux/actionTypes/appActionTypes";
import { ReactComponent as CircularCancelIcon } from "../../assets/svgs/circular_cancel_icon.svg";
import postsActionTypes from "../../redux/actionTypes/postsActionTypes";
import Resizer from "react-image-file-resizer";
import Typography from "@mui/material/Typography";

const styles = makeStyles({
  container: {
    position: "fixed",
    height: "100vh",
    backgroundColor: "#00000094",
    zIndex: 999,
  },
  innerContainer: {
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
    width: "250px",
    height: "250px",
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
  modalInputsSection: {
    padding: "30px",
  },
});

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      400,
      "PNG",
      30,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

const UploadSection = () => {
  const classes = styles();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [imageForUpload, setImageForUpload] = useState(null);
  const [imageForDisplay, setImageForDisplay] = useState(null);
  const [tagsInputValue, setTagsInputValue] = useState("");
  const [tags, setTags] = useState([]);

  const onTitleChange = (event) => {
    const title = event.target.value;
    setTitle(title);
  };

  const onImageUpload = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      setImageForUpload(await resizeFile(file));
      setImageForDisplay(reader.result);
    };
  };

  const onTagsInputChange = (event) => {
    setTagsInputValue(event.target.value);
  };

  const onTagsInputKeyDown = (event) => {
    const inputValueTrimmed = event.target.value.trim();

    if (event.which === 13 && tags.length < 5 && inputValueTrimmed !== "") {
      const isTagAlreadyExist = tags.find((tag) => tag === inputValueTrimmed);

      if (!isTagAlreadyExist) {
        setTags((currentTags) => [...currentTags, inputValueTrimmed]);
        setTagsInputValue("");
      }
    }
  };

  const onCloseUploadSection = () => {
    dispatch({ type: appActionTypes.HIDE_UPLOAD_SECTION });
  };

  const onTagDelete = (tag) => {
    const tagIndex = tags.indexOf(tag);
    const newTags = [...tags];
    newTags.splice(tagIndex, 1);
    setTags(newTags);
  };

  const onImageDelete = () => {
    setImageForDisplay(null);
    setImageForUpload(null);
  };

  const onDoneClick = () => {
    if (title.trim() !== "" && imageForUpload) {
      dispatch({
        type: postsActionTypes.ADD_POST_REQUEST,
        payload: { title, image: imageForUpload, tags },
      });
    }
  };

  return (
    <Grid
      item
      container
      xs={12}
      justifyContent="center"
      alignItems="center"
      className={classes.container}
      onClick={onCloseUploadSection}
    >
      <Grid
        item
        container
        xs={6}
        rowGap={2}
        className={classes.innerContainer}
        alignItems="space-between"
        onClick={(e) => e.stopPropagation()}
      >
        <Grid item>
          <Typography variant="h5">Upload a dank meme</Typography>
        </Grid>
        <Grid container item spacing={4} className={classes.modalInputsSection}>
          <Grid item xs={12}>
            <TextField value={title} onChange={onTitleChange} variant="outlined" label="Describe the meme" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Tags separated by enter (up to 5)"
              fullWidth
              value={tagsInputValue}
              onChange={onTagsInputChange}
              onKeyDown={onTagsInputKeyDown}
            />
          </Grid>

          {tags.length > 0 && (
            <Grid item container xs={12}>
              {tags.map((tag, index) => (
                <Grid item key={index}>
                  <Chip
                    className={classes.chip}
                    label={tag}
                    onDelete={() => {
                      onTagDelete(tag);
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          )}

          {imageForDisplay ? (
            <Grid item xs={12} className={classes.imageUploadedContainer}>
              <img src={imageForDisplay} className={classes.imageUploaded} alt="" />

              <ContainerButton component="label" onClick={onImageDelete} className={classes.removeImageButton}>
                <CircularCancelIcon />
              </ContainerButton>
            </Grid>
          ) : (
            <Grid item xs={12}>
              <ContainerButton component="label" variant="outlined">
                Upload image
                <input type="file" hidden onChange={onImageUpload} accept=".png, .jpg, .gif" />
              </ContainerButton>
            </Grid>
          )}
        </Grid>

        <Grid item container xs={12} justifyContent="flex-end" alignItems="flex-end" spacing={3}>
          <Grid item xs={2}>
            <ContainerButton component="label" variant="outlined" onClick={onCloseUploadSection}>
              Cancel
            </ContainerButton>
          </Grid>

          <Grid item xs={2}>
            <ContainerButton component="label" variant="outlined" onClick={onDoneClick}>
              Done
            </ContainerButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UploadSection;
