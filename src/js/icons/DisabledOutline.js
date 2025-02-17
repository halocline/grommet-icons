import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

export const DisabledOutline = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DisabledOutline" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M1 4a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4zm3-1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4zm2 8h12v2H6v-2z" fill="#000" />
  </StyledIcon>
));
