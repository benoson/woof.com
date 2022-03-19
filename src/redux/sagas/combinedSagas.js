import * as postSagas from "./postSagas";
import * as userSagas from "./userSagas";

import { all } from "redux-saga/effects";

export default function* combinedSagas() {
  yield all([
    postSagas.getFeedDataListener(),
    postSagas.addPostListener(),
    postSagas.addReactionListener(),
    postSagas.deletePostListener(),
    userSagas.registerListener(),
    userSagas.loginListener(),
    userSagas.addFriendListener(),
    userSagas.getUserDataListener(),
  ]);
}
