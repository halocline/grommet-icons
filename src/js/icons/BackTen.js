import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

export const BackTen = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="BackTen" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M3.111 7.556C4.67 4.267 8.07 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m0-8v4h4m3 8V9l-2 .533M17 12c0-2-1-3.5-2.5-3.5S12 10 12 12s1 3.5 2.5 3.5S17 14 17 12zm-2.5-3.5C16.925 8.5 17 11 17 12s0 3.5-2.5 3.5S12 13 12 12s.059-3.5 2.5-3.5z" />
  </StyledIcon>
));
