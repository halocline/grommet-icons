'use strict';

exports.__esModule = true;
exports.Channel = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StyledIcon = require('../StyledIcon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Channel = exports.Channel = function Channel(props) {
  return _react2.default.createElement(
    _StyledIcon.StyledIcon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Channel' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M2,9 L22,9 L22,22 L2,22 L2,9 Z M21,2 L13,9 L11,9 L3,2' })
  );
};