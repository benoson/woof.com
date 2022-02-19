import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import ContainerButton from "../components/common/ui/ContainerButton";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const styles = makeStyles({
  container: {
    padding: "20px 0px",
  },
});

const Login = () => {
  const classes = styles();
  const dispatch = useDispatch();

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

  const onProfileImageChange = (event) => {
    const profileImage = event.target.value.trim();
    setProfileImage(profileImage);
  };

  const onShowPasswordsClick = (event) => {
    setIsShowPasswords(event.target.checked);
  };

  return (
    <Grid container className={classes.container} justifyContent="center">
      <Grid container item xs={6} rowGap={4}>
        <Grid container item xs={12}>
          <TextField
            variant="standard"
            label="User name"
            value={userName}
            fullWidth
            onChange={onUserNameChange}
          />
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
            control={
              <Checkbox
                checked={isShowPasswords}
                onClick={onShowPasswordsClick}
              />
            }
            label="Show passwords"
          />
        </Grid>

        <Grid container item xs={12}>
          <ContainerButton component="label" fullWidth variant="outlined">
            Click here to upload your profile image
            <input
              type="file"
              hidden
              onChange={onProfileImageChange}
              accept=".png, .jpg"
            />
          </ContainerButton>
        </Grid>

        <Grid container item xs={12}>
          <ContainerButton component="label" fullWidth variant="outlined">
            Done
          </ContainerButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
