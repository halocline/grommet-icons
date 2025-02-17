import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

export const UploadOption = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="UploadOption" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-6.414.707.707 5 5-1.414 1.414L13 9.414V18h-2V9.414l-3.293 3.293-1.414-1.414 5-5L12 5.586z" fill="#000" />
  </StyledIcon>
));
