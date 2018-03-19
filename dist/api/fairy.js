'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _fairyGrow = require('../../data/fairyGrow.json');

var _fairyGrow2 = _interopRequireDefault(_fairyGrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFairy(fairy) {
  return (0, _extends3.default)({}, fairy, {
    getStats: function getStats() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _options$level = options.level,
          level = _options$level === undefined ? 100 : _options$level,
          _options$quality = options.quality,
          quality = _options$quality === undefined ? 5 : _options$quality;
      var baseStats = fairy.stats,
          grow = fairy.grow;

      var stats = {};

      (0, _keys2.default)(baseStats).forEach(function (key) {
        var baseStat = baseStats[key];

        var _fairyGrow$key = (0, _slicedToArray3.default)(_fairyGrow2.default[key], 2),
            statRatio = _fairyGrow$key[0],
            levelRatio = _fairyGrow$key[1],
            proportion = _fairyGrow2.default.proportion;

        stats[key] = Number(Math.ceil(statRatio * (baseStat / 100) + Math.ceil((level - 1) * levelRatio * (baseStat / 100) * (grow / 100))) * proportion[quality - 1]);
      });

      return stats;
    }
  });
}

exports.default = getFairy;