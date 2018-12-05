var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { StyledIcon } from '../StyledIcon';

export var Wheelchair = function Wheelchair(props) {
  return React.createElement(
    StyledIcon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Wheelchair' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M10,3 L10,12 L17,12 L19,18 L21,18 M15,9 L9,9 C5.6862915,9 3,11.6862915 3,15 C3,18.3137085 5.6862915,21 9,21 C12.3137085,21 15,18.3137085 15,15 M11,4 C11.5522847,4 12,3.55228475 12,3 C12,2.44771525 11.5522847,2 11,2 C10.4477153,2 10,2.44771525 10,3 C10,3.55228475 10.4477153,4 11,4 Z' })
  );
};