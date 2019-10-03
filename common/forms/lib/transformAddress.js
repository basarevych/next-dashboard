module.exports = function(value) {
  if (!this.isType(value) || value === null) return value;
  let isDosBreak = /\r\n/.test(value); // "\r\n" or "\n"
  let lines = _.map(_.split(value, /\r\n?|\n/g), line =>
    _.trim(_.replace(line, /\s{2,}/g, " "))
  );
  return [lines[0]]
    .concat([lines.slice(1).join(" ")])
    .join(isDosBreak ? "\r\n" : "\n");
};
