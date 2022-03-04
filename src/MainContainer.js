import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import AuthenticatedRoute from "./components/common/AuthenticatedRoute";
import UploadSection from "./components/common/UploadSection";
import Navbar from "./components/navbar/Navbar";
import Feed from "./pages/Feed";
import RegisterOrLogin from "./pages/RegisterOrLogin";
import { shouldDisplayUploadSectionSelector, userLoadingSelector, userSelector } from "./redux/selectors";
import LoadingIcon from "./components/common/ui/LoadingIcon";
import PostPopup from "./components/common/PostPopup";

const MainContainer = () => {
  const isShowUploadSection = useSelector(shouldDisplayUploadSectionSelector);
  const userFromState = useSelector(userSelector);
  const userLoadingSelectorFromState = useSelector(userLoadingSelector);

  return (
    <Grid container>
      <Router>
        {userFromState.isLogged && <Navbar />}

        {isShowUploadSection && <UploadSection />}

        {userLoadingSelectorFromState && <LoadingIcon />}

        <Routes>
          <Route
            exact
            path="/"
            element={
              <AuthenticatedRoute>
                <Feed />
              </AuthenticatedRoute>
            }
          />

          <Route exact path="/post/:postId" element={<PostPopup />} />
          <Route exact path="/login" element={<RegisterOrLogin />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </Grid>
  );
};

export default MainContainer;
