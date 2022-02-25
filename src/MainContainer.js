import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import UploadSection from "./components/common/UploadSection";
import Navbar from "./components/navbar/Navbar";
import Feed from "./pages/Feed";
import RegisterOrLogin from "./pages/RegisterOrLogin";
import {
  shouldDisplayUploadSectionSelector,
  userSelector,
} from "./redux/selectors";
import CheckAuth from "./components/common/logic/CheckAuth";

const MainContainer = () => {
  const isShowUploadSection = useSelector(shouldDisplayUploadSectionSelector);
  const userState = useSelector(userSelector);

  return (
    <Grid container>
      {userState.isLogged && <Navbar />}

      {isShowUploadSection && <UploadSection />}

      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={userState.isLogged ? <Feed /> : <RegisterOrLogin />}
          />

          <Route exact path="/login" element={<RegisterOrLogin />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </Grid>
  );
};

export default MainContainer;
