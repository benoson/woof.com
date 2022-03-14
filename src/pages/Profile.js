import React, { useEffect, useState } from "react";
import { Divider, Grid, Skeleton, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate, useParams } from "react-router-dom";
import { LightTooltip } from "../components/common/ui/LightToolTip";
import PostsSection from "../components/post/PostsSection";
import * as userService from "../services/userService";
import { useDispatch, useSelector } from "react-redux";
import postsActionTypes from "../redux/actionTypes/postsActionTypes";
import { postsSelector } from "../redux/selectors";

const styles = makeStyles({
  container: {
    padding: "20px 0px",
  },
  userLeftSideContainer: {
    position: "sticky",
    top: 106,
  },
  userImageContainer: {
    border: "10px solid white",
    borderRadius: "50%",
    position: "relative",
    backgroundColor: "white",
    textAlign: "center",
  },
  userImage: {
    borderRadius: "50%",
    height: "170px",
    width: "170px",
    objectFit: "cover",
  },
  friendImage: {
    height: "40px",
    width: "40px",
    objectFit: "cover",
    borderRadius: "50%",
    cursor: "pointer",
  },
  userInfoSection: {
    backgroundColor: "lightslategrey",
    paddingTop: "50px",
    marginTop: "-50px",
    borderRadius: "10px",
    padding: "0px 10px 10px 10px",
  },
  userNameSection: {
    borderRadius: "10px",
    padding: "0px 10px",
  },
});

const Profile = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const posts = useSelector(postsSelector);

  const { userName } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getUserDataFromServer = async () => {
      const userDataRes = await userService.getUserProfileData(userName);
      const userPosts = userDataRes.posts;

      setUserData(userDataRes);
      dispatch({
        type: postsActionTypes.FEED_DATA_FETCH_SUCCESS,
        payload: userPosts,
      });
    };

    getUserDataFromServer();
  }, [userName]);

  const UserImageSection = () => {
    const classes = styles();

    return (
      <Grid item className={classes.userImageContainer}>
        <img src={userData.image} className={classes.userImage} alt="" />
      </Grid>
    );
  };

  const UserInfoSection = () => {
    const classes = styles();

    return (
      <Grid
        container
        item
        rowSpacing={1}
        className={classes.userInfoSection}
        justifyContent="space-between"
      >
        {userData?.friends?.length > 0 ? (
          <>
            <Grid item container>
              <Typography color="white">
                Friends ({userData.friends.length}):
              </Typography>
            </Grid>

            <Grid item container justifyContent="flex-start">
              {userData?.friends?.map((friend, index) => (
                <Grid item xs={3} key={index}>
                  <LightTooltip
                    title={friend.name}
                    onClick={() => {
                      onFriendImageClick(friend.name);
                    }}
                  >
                    <img
                      src={friend.image}
                      alt=""
                      className={classes.friendImage}
                    />
                  </LightTooltip>
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          <Grid item container>
            <Typography color="white" align="left">
              {userData.name} doesn't have any friends yet
            </Typography>
          </Grid>
        )}
      </Grid>
    );
  };

  const UserNameSection = () => {
    const classes = styles();

    return (
      <Grid item xs={12} className={classes.userNameSection}>
        <Typography fontSize="42px" align="left">
          {userData.name}
        </Typography>

        <Divider />
      </Grid>
    );
  };

  const UserPostsSection = () => {
    const classes = styles();

    if (Object.keys(posts).length === 0) {
      return (
        <Grid item container>
          <Typography>
            {userData.name} doesn't have any memes posted yet
          </Typography>
        </Grid>
      );
    }

    return (
      <Grid item xs={12}>
        <PostsSection posts={posts} sectionSize={7} />
      </Grid>
    );
  };

  const onFriendImageClick = (friendName) => {
    navigate(`/profile/${friendName}`);
  };

  return (
    <Grid container item justifyContent="center" className={classes.container}>
      {userData.name ? (
        <Grid item container xs={8} alignItems="flex-start">
          <Grid
            item
            container
            xs={2}
            direction="column"
            className={classes.userLeftSideContainer}
          >
            <UserImageSection />

            <UserInfoSection />
          </Grid>

          <Grid item container xs={10} direction="column" rowSpacing={6}>
            <Grid item container>
              <UserNameSection />
            </Grid>

            <Grid item container>
              <UserPostsSection />
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Stack spacing={1}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={200} height={200} />
          <Skeleton variant="rectangular" width={1000} height={500} />
        </Stack>
      )}
    </Grid>
  );
};

export default Profile;
