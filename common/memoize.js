module.exports = function memoize(fn) {
  return fn;
  let lastArg;
  let lastResult;
  return (...args) => {
    if (args[0] !== lastArg) {
      lastArg = args[0];
      lastResult = fn(...args);
    }
    return lastResult;
  };
};
