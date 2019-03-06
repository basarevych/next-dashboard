"use strict";

const { Map } = require("immutable");
const selectors = require("../selectors");
const operations = require("../operations");

const dispatch = item => (_.isFunction(item) ? item(dispatch, _.noop) : item);

describe("Users", () => {
  let socket;

  beforeEach(() => {
    socket = {
      isDead: false,
      disconnect: jest.fn(_.noop)
    };
  });

  test("removeSocket() disconnects the socket", async () => {
    let socketIdentity = {
      userId: "userId",
      sessionId: "sessionId",
      socketId: "socketId"
    };
    selectors.getSocket = jest.fn((state, params) => {
      expect(params).toEqual(socketIdentity);
      return socket;
    });
    await operations.removeSocket(socketIdentity)(dispatch, _.noop, {
      get: _.noop
    });
    expect(selectors.getSocket).toHaveBeenCalled();
    expect(socket.isDead).toBeTruthy();
    expect(socket.disconnect).toHaveBeenCalledWith(true);
  });

  test("remove() also removes the sockets", async () => {
    let userIdentity = {
      userId: "userId"
    };
    let socketIdentity = {
      userId: "userId",
      sessionId: "sessionId",
      socketId: "socketId"
    };
    selectors.getSessionsMap = jest.fn((state, params) => {
      expect(params).toEqual(userIdentity);
      return Map({
        sessionId: Map({ sockets: Map({ socketId: Map({ socket }) }) })
      });
    });
    selectors.getSocket = jest.fn((state, params) => {
      expect(params).toEqual(socketIdentity);
      return socket;
    });
    await operations.remove(userIdentity)(dispatch, _.noop, {
      get: _.noop
    });
    expect(selectors.getSessionsMap).toHaveBeenCalled();
    expect(selectors.getSocket).toHaveBeenCalled();
    expect(socket.isDead).toBeTruthy();
    expect(socket.disconnect).toHaveBeenCalledWith(true);
  });
});
