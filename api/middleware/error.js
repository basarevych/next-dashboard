"use strict";

module.exports = async () => (err, req, res, next) => {
  let status;
  if (err.status) status = err.status;
  else if (res.statusCode !== 200) status = res.statusCode;
  else status = 500;

  let message;
  if (process.env.NODE_ENV === "development") message = err.message;
  else if (status === 500) message = "Internal Server Error";
  else message = err.message;

  let stack = undefined;
  if (process.env.NODE_ENV === "development") stack = _.split(err.stack, "\n");

  if (status === 500) console.error(err);

  if (res.headersSent) return;

  res.status(status);
  res.json({ error: status, message, stack });
};
