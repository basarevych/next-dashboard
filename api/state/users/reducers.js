"use strict";

const { combineReducers } = require("redux-immutable");
const { Map } = require("immutable");
const types = require("./types");

/* State Shape
Map({
  userId: Map({
    lastSeen: timestamp,
    sessions: Map({
      sessionId: Map({
        sockets: Map({
          socketId: Map({
            socket: Socket,
          })
        })
      }),
    }),
  })
})
*/

const socketReducer = (state = null, action) => {
  switch (action.type) {
    case types.ADD_SOCKET:
      if (!_.isUndefined(action.socket)) return action.socket;
      break;
    case types.REMOVE_SOCKET:
      return null;
  }
  return state;
};

const socketInfoReducer = combineReducers({
  socket: socketReducer
});

const socketsReducer = (state = Map({}), action) => {
  switch (action.type) {
    case types.ADD_SOCKET:
    case types.REMOVE_SOCKET:
      return state.withMutations(map =>
        map.set(
          action.socketId,
          socketInfoReducer(map.get(action.socketId), action)
        )
      );
  }
  return state;
};

const sessionInfoReducer = combineReducers({
  sockets: socketsReducer
});

const sessionsReducer = (state = Map({}), action) => {
  switch (action.type) {
    case types.ADD_SOCKET:
    case types.REMOVE_SOCKET:
      return state.withMutations(map =>
        map.set(
          action.sessionId,
          sessionInfoReducer(map.get(action.sessionId), action)
        )
      );
  }
  return state;
};

const lastSeenReducer = () => {
  return Date.now();
};

const userInfoReducer = combineReducers({
  lastSeen: lastSeenReducer,
  sessions: sessionsReducer
});

const usersReducer = (state = Map({}), action) => {
  switch (action.type) {
    case types.ADD_SOCKET:
    case types.REMOVE_SOCKET:
      return state.withMutations(map =>
        map.set(action.userId, userInfoReducer(map.get(action.userId), action))
      );
    case types.REMOVE:
      return state.delete(action.userId);
  }
  return state;
};

module.exports = usersReducer;
