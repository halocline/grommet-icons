import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

export const Package = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Package" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.371.571 12 .423l-.371.148-10 4L1 4.823v14.354l.629.251 10 4 .371.149.371-.149 10-4 .629-.251V4.823l-.629-.252-10-4zM3 6.977v10.846l8 3.2V10.177l-8-3.2zm10 3.2v10.846l8-3.2V6.977l-8 3.2zM19.307 5.5 12 2.577 9.943 3.4l7.307 2.923 2.057-.823zm-14.614 0L7.25 4.477 14.557 7.4 12 8.423 4.693 5.5z" fill="#000" />
  </StyledIcon>
));
