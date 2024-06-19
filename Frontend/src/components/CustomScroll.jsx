import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

const CustomScroll = ({ children }) => (
  <Scrollbars
    renderTrackVertical={props => <div {...props} style={{ backgroundColor: '#f1f1f1', borderRadius: '10px' }} />}
    renderThumbVertical={props => <div {...props} style={{ backgroundColor: '#888', borderRadius: '10px' }} />}
  >
    {children}
  </Scrollbars>
);

export default CustomScroll;
