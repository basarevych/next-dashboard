"use strict";

function hueToRgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  let r;
  let g;
  let b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;

    r = hueToRgb(p, q, h + 1 / 3);
    g = hueToRgb(p, q, h);
    b = hueToRgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

/**
 * Get random gradient start color for item number "index" out of "length" possible
 * @param {number} index
 * @param {number} length
 * @return {Array} [r, g, b]
 */
function getColorStart(index, length) {
  return hslToRgb(index / length, 0.65, 0.7);
}

/**
 * Get random gradient stop color for item number "index" out of "length" possible
 * @param {number} index
 * @param {number} length
 * @return {Array} [r, g, b]
 */
function getColorEnd(index, length) {
  return hslToRgb(index / length, 0.65, 0.4);
}

/**
 * Get random color for item number "index" out of "length" possible
 * @param {number} index
 * @param {number} length
 * @return {Array} [r, g, b]
 */
function getColor(index, length) {
  return hslToRgb(index / length, 0.65, 0.55);
}

module.exports = {
  hueToRgb,
  hslToRgb,
  getColorStart,
  getColorEnd,
  getColor
};
