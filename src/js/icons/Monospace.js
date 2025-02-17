import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

export const Monospace = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Monospace" {...props}>
    <path d="M11.88 17h-2.3l-.93-2.9H4.44L3.57 17H1.32L5.41 4.17h2.25zM8 11.93 6.52 7.17l-1.43 4.76zM14.13 17 12.22 4.17h1.66L15.07 13l1.46-8.82h1.92l1.4 9 1.23-9h1.62L20.78 17h-1.72l-1.6-9.6-1.58 9.6zm-2.77.95v1.39H1.89v-1.39h-.51v1.91h10.49v-1.91h-.51zm10.81.05v1.39h-9.48V18h-.5v1.91h10.49V18h-.51z" />
  </StyledIcon>
));
