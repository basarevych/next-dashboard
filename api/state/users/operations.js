"use strict";

const actions = require("./actions");
const selectors = require("./selectors");

const addSocket = actions.addSocket;

const removeSocket = ({ userId, sessionId, socketId }) => {
  return async (dispatch, getState) => {
    const socket = selectors.getSocket(getState(), {
      userId,
      sessionId,
      socketId
    });
    if (socket) {
      socket.isDead = true;
      socket.disconnect(true);
      await dispatch(actions.removeSocket({ userId, sessionId, socketId }));
    }
  };
};

const remove = ({ userId }) => {
  return async (dispatch, getState) => {
    await Promise.all(
      selectors
        .getSessionsMap(getState(), { userId })
        .flatMap((session, sessionId) =>
          // eslint-disable-next-line lodash/prefer-lodash-method
          session
            .get("sockets")
            .map((info, socketId) =>
              dispatch(removeSocket({ userId, sessionId, socketId }))
            )
        )
        .toList()
        .toJS()
    );
    return dispatch(
      actions.remove({
        userId
      })
    );
  };
};

module.exports = {
  addSocket,
  removeSocket,
  remove
};
