import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

export const UserPolice = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="UserPolice" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M16 14c2.374 1.183 4 3.65 4 7v2H4v-2c0-3.354 1.631-5.825 4-7m4 1c3.26 0 5.903-2.686 5.903-5.999 0-.702.218-1.375 0-2.001M6.093 7c-.21.615 0 1.313 0 2.001C6.093 12.314 8.738 15 12 15M6 8h12l3-4c-1.912-1.735-5.21-3-9-3-3.836 0-7.168 1.296-9 3l3 4zm6-3a1 1 0 0 0 1-1h-2a1 1 0 0 0 1 1z" />
  </StyledIcon>
));
