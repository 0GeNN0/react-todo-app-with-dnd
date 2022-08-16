import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { TodoContext } from '../Context';


function BackgroundImage() {
  const { isDark } = React.useContext(TodoContext);
  const isMobile = useMediaQuery({ query: '(max-width: 400px)' });

  // Display Condition with dark theme and mobile screen
  const screen = isMobile ? 'mobile' : 'desktop';
  const theme = isDark ? 'dark' : 'light';

  const headerStyle = {
    backgroundImage: `url(./images/bg-${screen}-${theme}.jpg)`,
  };

  return (
    <div className='bg-header' style={headerStyle}>
    </div>
  );
}

export default BackgroundImage;