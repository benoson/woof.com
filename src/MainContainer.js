import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Grid } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import Feed from "./pages/Feed";
import UploadSection from "./components/common/UploadSection";
import {
  shouldDisplayUploadSectionSelector,
  userSelector,
} from "./redux/selectors";
import { useSelector } from "react-redux";
import Register from "./pages/Register";
import RegisterOrLogin from "./pages/RegisterOrLogin";

const MainContainer = () => {
  const isShowUploadSection = useSelector(shouldDisplayUploadSectionSelector);
  const userFromState = useSelector(userSelector);

  return (
    <Grid container>
      {userFromState.isLogged && <Navbar />}

      {isShowUploadSection && <UploadSection />}

      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={userFromState.isLogged ? <Feed /> : <RegisterOrLogin />}
          />
          <Route exact path="/register" element={<Register />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </Grid>
  );
};

export default MainContainer;
