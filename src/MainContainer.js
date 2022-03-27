import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
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
import {
  preferencesSelector,
  shouldDisplayUploadSectionSelector,
  userLoadingSelector,
  userSelector,
} from "./redux/selectors";

const MainContainer = () => {
  const isShowUploadSection = useSelector(shouldDisplayUploadSectionSelector);
  const userFromState = useSelector(userSelector);
  const userLoadingSelectorFromState = useSelector(userLoadingSelector);
  const preferences = useSelector(preferencesSelector);

  const styledByPreferences = {
    backgroundColor: preferences.generalBackground || "white",
  };

  return (
    <Grid container style={styledByPreferences}>
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

      <ToastContainer />
    </Grid>
  );
};

export default MainContainer;
