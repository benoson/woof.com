import { TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ContainerButton from "../components/common/ui/ContainerButton";
import usersActionTypes from "../redux/actionTypes/usersActionTypes";
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

const Login = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [isShowPassword, setIsShowPassword] = useState(false);

  const onUserNameChange = (event) => {
    const userNameTrimmed = event.target.value.trim();
    setUserName(userNameTrimmed);
  };

  const onPasswordChange = (event) => {
    const passwordTrimmed = event.target.value.trim();
    setPassword(passwordTrimmed);
  };

  const onShowPasswordClick = (event) => {
    setIsShowPassword(event.target.checked);
  };

  const onDoneClick = () => {
    dispatch({
      type: usersActionTypes.LOGIN_REQUEST,
      payload: { userName, password, navigate },
    });
  };

  const getIsDoneButtonDisabled = () => {
    return !(userName.trim() !== "" && password.trim() !== "");
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
            type={isShowPassword ? "text" : "password"}
            variant="standard"
            label="Password"
            value={password}
            fullWidth
            onChange={onPasswordChange}
          />
        </Grid>

        <Grid container item xs={12} alignItems="center">
          <FormControlLabel
            control={<Checkbox checked={isShowPassword} onClick={onShowPasswordClick} />}
            label="Show password"
          />
        </Grid>

        <Grid container item xs={12}>
          <ContainerButton
            component="label"
            fullWidth
            variant="outlined"
            onClick={onDoneClick}
            disabled={isDoneButtonDisabled}
          >
            Done
          </ContainerButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
