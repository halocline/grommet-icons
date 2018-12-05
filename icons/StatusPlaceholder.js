'use strict';

exports.__esModule = true;
exports.StatusPlaceholder = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StyledIcon = require('../StyledIcon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatusPlaceholder = exports.StatusPlaceholder = function StatusPlaceholder(props) {
  return _react2.default.createElement(
    _StyledIcon.StyledIcon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'StatusPlaceholder' }, props),
    _react2.default.createElement('rect', { width: '20', height: '20', x: '2', y: '2', fill: 'none', stroke: '#000', strokeWidth: '2', rx: '2' })
  );
};