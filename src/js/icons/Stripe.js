import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

export const Stripe = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Stripe" {...props}>
    <path fill="#AACBFB" fillRule="evenodd" d="M1 1h22v22H1V1zm10.12 8.19c0-.604.494-.836 1.314-.836 1.174 0 2.658.356 3.833.99V5.71c-1.283-.509-2.55-.71-3.833-.71-3.138 0-5.225 1.639-5.225 4.375 0 4.266 5.874 3.586 5.874 5.425 0 .711-.619.943-1.484.943-1.283 0-2.922-.525-4.22-1.236v3.679c1.437.618 2.89.88 4.22.88 3.215 0 5.426-1.591 5.426-4.358-.016-4.607-5.905-3.788-5.905-5.519z" />
  </StyledIcon>
));
