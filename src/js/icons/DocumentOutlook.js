import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

export const DocumentOutlook = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="DocumentOutlook" {...props}>
    <path fill="none" stroke="#000" strokeWidth="2" d="M2.998 9V1H17.5L21 4.5V23H2M16 1v5h5M7.75 15.75C7.75 13.5 6.5 12 5 12s-2.75 1.5-2.75 3.75S3.5 19.5 5 19.5s2.75-1.5 2.75-3.75zM5 12c2.425 0 3 2.5 3 3.75s-.5 3.75-3 3.75-3-2.5-3-3.75S2.559 12 5 12z" />
  </StyledIcon>
));
