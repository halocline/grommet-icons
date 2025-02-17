import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

export const Gateway = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Gateway" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zM2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm11.031-5.031H13V4h-2v2.969H8.969l1.2 1.6L11.2 9.944l.8 1.066.8-1.066 1.031-1.375 1.2-1.6h-2zM12 12.997l-.8 1.067-1.031 1.375-1.2 1.6H11V20h2v-2.96h2.031l-1.2-1.6-1.031-1.376-.8-1.067zM4.025 12.8 2.958 12l1.067-.8L5.4 10.169l1.6-1.2V11h3v2H7v2.031l-1.6-1.2L4.025 12.8zm17.017-.8-1.067-.8-1.375-1.031-1.6-1.2V11h-3v2h3v2.031l1.6-1.2 1.375-1.031 1.067-.8z" fill="#000" />
  </StyledIcon>
));
