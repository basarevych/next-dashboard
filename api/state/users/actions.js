"use strict";

const types = require("./types");

const addSocket = data => _.assign({ type: types.ADD_SOCKET }, data);

const removeSocket = data => _.assign({ type: types.REMOVE_SOCKET }, data);

const remove = ({ userId }) => ({ type: types.REMOVE, userId });

module.exports = {
  addSocket,
  removeSocket,
  remove
};
