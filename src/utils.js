const isStr = (v) => Object.prototype.toString.call(v) === '[object String]';

const throwIfNonString = (v) => {
  if (!isStr(v)) throw TypeError('String expected');
};

const isMinOrSec = (v) => Number.isInteger(v) && v < 60 && v >= 0;

const toggleCase = (v) => {
  if (!isStr(v)) return v;
  return v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase();
};

module.exports = {
  isStr,
  throwIfNonString,
  isMinOrSec,
  toggleCase,
};
