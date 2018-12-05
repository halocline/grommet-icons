'use strict';

exports.__esModule = true;
exports.FormDown = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StyledIcon = require('../StyledIcon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormDown = exports.FormDown = function FormDown(props) {
  return _react2.default.createElement(
    _StyledIcon.StyledIcon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'FormDown' }, props),
    _react2.default.createElement('polyline', { fill: 'none', stroke: '#000', strokeWidth: '2', points: '18 9 12 15 6 9' })
  );
};