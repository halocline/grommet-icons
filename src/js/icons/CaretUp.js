import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

export const CaretUp = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="CaretUp" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M22 16 12 4 2 16z" />
  </StyledIcon>
));
