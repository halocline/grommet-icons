import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

export const Baby = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Baby" {...props}>
    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 15h4s-1 1.5-2 1.5-2-1.5-2-1.5zm2-9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 6-4-3m0 6 3 2.5-2.5 2.5M6 12l4-3m0 6-2.5 2.75L10 20m0-11h4v3h-4V9z" />
  </StyledIcon>
));
