module.exports = function(value) {
  if (!this.isType(value) || value === null) return value;
  let isDosBreak = /\r\n/.test(value); // "\r\n" or "\n"
  let lines = value
    .split(/\r\n?|\n/g)
    .map(line => line.replace(/\s{2,}/g, " ").trim());
  return [lines[0]]
    .concat([lines.slice(1).join(" ")])
    .join(isDosBreak ? "\r\n" : "\n");
};
