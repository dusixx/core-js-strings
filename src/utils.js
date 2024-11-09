const isStr = (v) => Object.prototype.toString.call(v) === '[object String]';

const throwIfNonString = (v) => {
  if (!isStr(v)) throw TypeError('String expected');
};

const isPositiveInt = (v) => Number.isInteger(v) && v >= 0;

const toggleCase = (v) => {
  if (!isStr(v)) return v;
  return v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase();
};

const spliceStr = (str, startIdx, len) =>
  startIdx < 0 ? str : str.slice(0, startIdx).concat(str.slice(startIdx + len));

module.exports = {
  isStr,
  throwIfNonString,
  toggleCase,
  spliceStr,
  isPositiveInt,
};
