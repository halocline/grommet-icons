import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

export const Sun = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Sun" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1zM6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0zm6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm1 12a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2zm10-8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zM4 13a1 1 0 1 0 0-2H2a1 1 0 1 0 0 2h2zm15.778-8.778a1 1 0 0 1 0 1.414L18.364 7.05a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zM7.05 18.364a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414zM4.222 4.222a1 1 0 0 1 1.414 0L7.05 5.636A1 1 0 1 1 5.636 7.05L4.222 5.636a1 1 0 0 1 0-1.414zM18.364 16.95a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414z" fill="#000" />
  </StyledIcon>
));
