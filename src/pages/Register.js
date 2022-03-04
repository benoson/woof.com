import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import ContainerButton from "../components/common/ui/ContainerButton";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import usersActionTypes from "../redux/actionTypes/usersActionTypes";
import Resizer from "react-image-file-resizer";
import { useNavigate } from "react-router-dom";

const styles = makeStyles({
  container: {
    padding: "20px 0px",
  },
  profileImageContainer: {
    textAlignL: "center",
  },
  profileImage: {
    objectFit: "cover",
    width: "250px",
    height: "250px",
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

const Register = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const [isShowPasswords, setIsShowPasswords] = useState(false);

  const onUserNameChange = (event) => {
    const userNameTrimmed = event.target.value.trim();
    setUserName(userNameTrimmed);
  };

  const onPasswordChange = (event) => {
    const passwordTrimmed = event.target.value.trim();
    setPassword(passwordTrimmed);
  };

  const onConfirmPasswordChange = (event) => {
    const confirmPasswordTrimmed = event.target.value.trim();
    setConfirmPassword(confirmPasswordTrimmed);
  };

  const onProfileImageChange = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    const compressedImage = await resizeFile(file);
    reader.readAsDataURL(file);

    reader.onloadend = (e) => {
      setProfileImage(compressedImage);
    };
  };

  const onShowPasswordsClick = (event) => {
    setIsShowPasswords(event.target.checked);
  };

  const onDoneClick = () => {
    dispatch({
      type: usersActionTypes.REGISTER_REQUEST,
      payload: { userName, profileImage, password, confirmPassword, navigate },
    });
  };

  const getIsDoneButtonDisabled = () => {
    return !(userName.trim() !== "" && password.trim() !== "" && confirmPassword.trim() === password && profileImage);
  };

  const isDoneButtonDisabled = getIsDoneButtonDisabled();

  return (
    <Grid container className={classes.container} justifyContent="center">
      <Grid container item xs={6} rowGap={4}>
        <Grid container item xs={12}>
          <TextField variant="standard" label="User name" value={userName} fullWidth onChange={onUserNameChange} />
        </Grid>

        <Grid container item xs={12}>
          <TextField
            type={isShowPasswords ? "text" : "password"}
            variant="standard"
            label="Password"
            value={password}
            fullWidth
            onChange={onPasswordChange}
          />
        </Grid>

        <Grid container item xs={12}>
          <TextField
            type={isShowPasswords ? "text" : "password"}
            variant="standard"
            label="Confirm password"
            value={confirmPassword}
            fullWidth
            onChange={onConfirmPasswordChange}
          />
        </Grid>

        <Grid container item xs={12} alignItems="center">
          <FormControlLabel
            control={<Checkbox checked={isShowPasswords} onClick={onShowPasswordsClick} />}
            label="Show passwords"
          />
        </Grid>

        <Grid container item xs={12}>
          {profileImage ? (
            <Grid item xs={12} className={classes.profileImageContainer}>
              <img src={profileImage} className={classes.profileImage} alt="" />
            </Grid>
          ) : (
            <ContainerButton component="label" fullWidth variant="outlined">
              Upload A profile image
              <input type="file" hidden onChange={onProfileImageChange} accept=".png, .jpg" />
            </ContainerButton>
          )}
        </Grid>

        <Grid container item xs={12}>
          <ContainerButton component="label" fullWidth variant="outlined" onClick={onDoneClick} disabled={isDoneButtonDisabled}>
            Done
          </ContainerButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Register;
