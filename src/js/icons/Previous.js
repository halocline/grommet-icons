import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

export const Previous = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Previous" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M17 2 7 12l10 10" />
  </StyledIcon>
));
