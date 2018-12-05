'use strict';

exports.__esModule = true;
exports.Halt = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StyledIcon = require('../StyledIcon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Halt = exports.Halt = function Halt(props) {
  return _react2.default.createElement(
    _StyledIcon.StyledIcon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Halt' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M8,23 C10,23 12.9996892,23 15,23 C18,23 19,21 19,18 L19,6 C19,4.00000008 18,3.99999992 17.5,4 C17,4.00000008 15.9998779,4.00000008 15.9998779,5.99999984 C15.9998779,7.9999996 15.9998782,13 15.9998782,13 C15.9998782,13 15.9998784,5.00000004 15.9998782,4 C15.9998779,2.99999996 15.9998779,2 14.5,2 C13.0001221,2 12.9996891,2.99999994 12.9996891,4.00000006 C12.9996891,5.00000017 12.9996892,13 12.9996892,13 C12.9996892,13 12.9996891,4.00000006 12.9996891,3.00000006 C12.9996891,2.00000006 13,1.00000001 11.5,0.999999996 C10,0.999999981 10,2.00000006 10,3 L10,13 L10,4 C10,3 10.029402,2 8.5,2 C7,2 7,3 7,4 L7,18 L7,14 C7,13 6.44999986,12 5.00000005,12 C5,12 4,12 4,12 C4,12 4.00000001,14.0384045 4,18 C3.99999999,21.9615955 6,23.023861 8,23 Z' })
  );
};