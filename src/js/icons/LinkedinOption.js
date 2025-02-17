import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

export const LinkedinOption = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="LinkedinOption" {...props}>
    <path fill="#0077B5" fillRule="evenodd" d="M22.037 22h-4.152v-6.496c0-1.55-.026-3.542-2.157-3.542-2.16 0-2.49 1.688-2.49 3.43V22H9.09V8.64h3.98v1.827h.058c.553-1.05 1.908-2.158 3.928-2.158 4.204 0 4.98 2.766 4.98 6.364V22zM4.409 6.816A2.407 2.407 0 0 1 2 4.407a2.408 2.408 0 1 1 2.41 2.408zM6.486 22H2.33V8.64h4.156V22z" />
  </StyledIcon>
));
