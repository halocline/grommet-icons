var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { StyledIcon } from '../StyledIcon';

export var Apple = function Apple(props) {
  return React.createElement(
    StyledIcon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Apple' }, props),
    React.createElement('path', { fill: '#AAA', fillRule: 'evenodd', d: 'M15.3007013,3.832 C16.1387013,2.818 16.7027013,1.405 16.5487013,0 C15.3407013,0.049 13.8797013,0.805 13.0137013,1.819 C12.2367013,2.717 11.5567013,4.154 11.7407013,5.531 C13.0867013,5.636 14.4627013,4.847 15.3007013,3.832 M18.3207013,12.75 C18.3547013,16.382 21.5067013,17.591 21.5417013,17.607 C21.5157013,17.692 21.0387013,19.329 19.8807013,21.02 C18.8807013,22.482 17.8427013,23.939 16.2067013,23.969 C14.5997013,23.998 14.0837013,23.016 12.2457013,23.016 C10.4097013,23.016 9.83570131,23.939 8.31370131,23.998 C6.73570131,24.058 5.53370131,22.417 4.52470131,20.961 C2.46370131,17.981 0.888701307,12.541 3.00370131,8.869 C4.05470131,7.045 5.93170131,5.89 7.96970131,5.861 C9.51970131,5.831 10.9827013,6.904 11.9307013,6.904 C12.8777013,6.904 14.6557013,5.614 16.5247013,5.803 C17.3077013,5.836 19.5037013,6.119 20.9147013,8.184 C20.8007013,8.254 18.2937013,9.714 18.3207013,12.75' })
  );
};