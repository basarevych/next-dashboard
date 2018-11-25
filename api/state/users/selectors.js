"use strict";

const { Map } = require("immutable");

const getUsersMap = state => state.get("users");

const getOnlineUsersList = state =>
  // eslint-disable-next-line lodash/prefer-lodash-method
  state
    .get("users")
    .map((user, userId) => (user.get("sessions").size ? userId : null))
    .toList()
    .filter(item => !!item);

const getOfflineUsersList = (state, props) =>
  // eslint-disable-next-line lodash/prefer-lodash-method
  state
    .get("users")
    .map((user, userId) => {
      return !user.get("sessions").size &&
        Date.now() - user.get("lastSeen") >= props.sessionTimeout
        ? userId
        : null;
    })
    .toList()
    .filter(item => !!item);

const getSessionsMap = (state, props) =>
  state.getIn(["users", props.userId, "sessions"]) || Map({});

const getSocketsMap = (state, props) =>
  state.getIn([
    "users",
    props.userId,
    "sessions",
    props.sessionId,
    "sockets"
  ]) || Map({});

const getSocket = (state, props) => {
  const info = getSocketsMap(state, props);
  return (info.size && info.getIn([props.socketId, "socket"])) || null;
};

module.exports = {
  getUsersMap,
  getOnlineUsersList,
  getOfflineUsersList,
  getSessionsMap,
  getSocketsMap,
  getSocket
};
