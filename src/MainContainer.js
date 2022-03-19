import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chat from "./components/chat/Chat";
import AuthenticatedRoute from "./components/common/AuthenticatedRoute";
import LoadingIcon from "./components/common/ui/LoadingIcon";
import UploadSection from "./components/common/UploadSection";
import Navbar from "./components/navbar/Navbar";
import Feed from "./pages/Feed";
import Preferences from "./pages/Preferences";
import Profile from "./pages/Profile";
import RegisterOrLogin from "./pages/RegisterOrLogin";
import usersActionTypes from "./redux/actionTypes/usersActionTypes";
import {
  shouldDisplayUploadSectionSelector,
  userLoadingSelector,
  userSelector,
} from "./redux/selectors";

const MainContainer = () => {
  const dispatch = useDispatch();

  const isShowUploadSection = useSelector(shouldDisplayUploadSectionSelector);
  const userFromState = useSelector(userSelector);
  const userLoadingSelectorFromState = useSelector(userLoadingSelector);

  useEffect(() => {
    dispatch({ type: usersActionTypes.USER_DATA_REQUEST });
  }, []);

  return (
    <Grid container>
      <Router>
        {userFromState.isLogged && (
          <>
            <Navbar />
            <Chat />
          </>
        )}

        {isShowUploadSection && <UploadSection />}

        {userLoadingSelectorFromState && <LoadingIcon />}

        <Routes>
          <Route
            exact
            path="*"
            element={
              <AuthenticatedRoute>
                <Feed />
              </AuthenticatedRoute>
            }
          />

          <Route
            exact
            path="/profile/:userName"
            element={
              <AuthenticatedRoute>
                <Profile />
              </AuthenticatedRoute>
            }
          />

          <Route
            exact
            path="/preferences"
            element={
              <AuthenticatedRoute>
                <Preferences />
              </AuthenticatedRoute>
            }
          />

          <Route exact path="/login" element={<RegisterOrLogin />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>

      <ToastContainer theme="dark" />
    </Grid>
  );
};

export default MainContainer;
