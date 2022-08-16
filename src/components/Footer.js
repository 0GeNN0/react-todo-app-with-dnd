import React from 'react';

import FooterActions from './FooterActions';
import { TodoContext } from '../Context';

function Footer() {
  const { isDark, clearCompleted, todoList, isTabletOrBigger } = React.useContext(TodoContext);
  const footerClass = isDark ? 'dark' : '';

  const leftItems = todoList.filter(item => !item.isChecked).length;
  const suffix = leftItems > 1 ? 's' : '';

  return (
    <footer className={footerClass}>
      <span className='left-items'>{leftItems} item{suffix} left</span>
      {isTabletOrBigger && <FooterActions />}
      <span className='clear-all' onClick={clearCompleted}>Clear Completed</span>
    </footer>
  );
}

export default Footer;