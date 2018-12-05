'use strict';

exports.__esModule = true;
exports.TextAlignFull = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StyledIcon = require('../StyledIcon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextAlignFull = exports.TextAlignFull = function TextAlignFull(props) {
  return _react2.default.createElement(
    _StyledIcon.StyledIcon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'TextAlignFull' }, props),
    _react2.default.createElement('rect', { x: '0.46', y: '3.06', width: '23.08', height: '2.18' }),
    _react2.default.createElement('rect', { x: '0.46', y: '8.29', width: '23.08', height: '2.18' }),
    _react2.default.createElement('rect', { x: '0.46', y: '13.53', width: '23.08', height: '2.18' }),
    _react2.default.createElement('rect', { x: '0.46', y: '18.76', width: '15.81', height: '2.18' })
  );
};